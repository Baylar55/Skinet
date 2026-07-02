const DIGITS_INFO_PATTERN = /^\d+(?:\.\d+)?(?:-\d+)?$/;
const MAX_DIGITS = 20;

export function parseSafeDigitsInfo(input: string | undefined | null): string | undefined {
  if (!input) return undefined;

  if (!DIGITS_INFO_PATTERN.test(input)) return undefined;

  const parts = input.split(/[.\-]/);
  const values = parts.map(Number);

  for (const v of values) {
    if (isNaN(v) || v < 0 || !Number.isInteger(v)) return undefined;
  }

  if (parts.length === 1) {
    const minInt = values[0];
    return clampDigitsInfo(minInt, 0, 0);
  }

  if (parts.length === 2 && input.includes('.')) {
    const minInt = values[0];
    const minFrac = values[1];
    return clampDigitsInfo(minInt, minFrac, minFrac);
  }

  if (parts.length === 3) {
    const minInt = values[0];
    const minFrac = values[1];
    const maxFrac = values[2];
    return `${Math.min(minInt, 10)}.${Math.min(minFrac, MAX_DIGITS)}-${Math.min(Math.max(minFrac, maxFrac), MAX_DIGITS)}`;
  }

  return undefined;
}

function clampDigitsInfo(minInt: number, minFrac: number, maxFrac: number): string {
  return `${Math.min(minInt, 10)}.${Math.min(minFrac, MAX_DIGITS)}-${Math.min(Math.max(minFrac, maxFrac), MAX_DIGITS)}`;
}
