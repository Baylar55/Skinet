const SAFE_PREDEFINED_FORMATS = new Set([
  'short', 'medium', 'long', 'full',
  'shortDate', 'mediumDate', 'longDate', 'fullDate',
  'shortTime', 'mediumTime', 'longTime', 'fullTime',
]);

const MAX_FORMAT_LENGTH = 50;

const CUSTOM_FORMAT_PATTERN = /^[a-zA-Z0-9\s,./:\-']+$/;

export function parseSafeDateFormat(input: unknown): string {
  if (typeof input !== 'string' || input.length === 0) return 'medium';

  if (SAFE_PREDEFINED_FORMATS.has(input)) return input;

  if (input.length > MAX_FORMAT_LENGTH) return 'medium';

  if (!CUSTOM_FORMAT_PATTERN.test(input)) return 'medium';

  return input;
}
