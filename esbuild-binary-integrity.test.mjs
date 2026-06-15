import assert from 'assert/strict';
import https from 'https';
import crypto from 'crypto';
import zlib from 'zlib';
import fs from 'fs';
import path from 'path';

const packageJSON = JSON.parse(fs.readFileSync(path.join('client', 'node_modules', 'esbuild', 'package.json'), 'utf8'));
const expectedHashes = packageJSON['esbuild.binaryHashes'];
const pkg = '@esbuild/win32-x64';
const subpath = 'esbuild.exe';
const key = `${pkg}/${subpath}`;

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if ((res.statusCode === 301 || res.statusCode === 302) && res.headers.location) {
        return fetch(res.headers.location).then(resolve, reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`Server responded with ${res.statusCode}`));
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function extractFileFromTarGzip(buffer, file) {
  buffer = zlib.unzipSync(buffer);
  const str = (i, n) => Buffer.from(buffer.subarray(i, i + n)).toString('utf8').replace(/\0.*$/, '');
  let offset = 0;
  file = `package/${file}`;
  while (offset < buffer.length) {
    const name = str(offset, 100);
    const size = parseInt(str(offset + 124, 12), 8);
    offset += 512;
    if (!isNaN(size) && size >= 0) {
      if (name === file) return buffer.subarray(offset, offset + size);
      offset += (size + 511) & ~511;
    }
  }
  throw new Error(`Could not find ${JSON.stringify(file)} in archive`);
}

async function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

async function binaryIntegrityCheck(bytes) {
  const hash = await sha256(bytes);
  const expected = expectedHashes[key];
  assert.ok(expected, `Missing hash for ${key}`);
  assert.equal(hash, expected);
}

const url = `https://registry.npmjs.org/${pkg}/-/${pkg.replace('@esbuild/', '')}-0.27.3.tgz`;
const tarball = await fetch(url);
const binary = extractFileFromTarGzip(tarball, subpath);

await binaryIntegrityCheck(binary);

const tampered = new Uint8Array(binary);
tampered[0] ^= 0xff;
await assert.rejects(async () => binaryIntegrityCheck(tampered));

console.log('esbuild binary integrity checks passed');
