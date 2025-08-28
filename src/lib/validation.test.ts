import { isValidIranMobile, normalizeIranMobile } from './validation';
describe('Iran phone validation', () => {
  it('accepts valid formats', () => {
    expect(isValidIranMobile('09123456789')).toBe(true);
    expect(isValidIranMobile('+989123456789')).toBe(true);
    expect(isValidIranMobile('00989123456789')).toBe(true);
  });
  it('rejects invalid inputs', () => {
    expect(isValidIranMobile('')).toBe(false);
    expect(isValidIranMobile('09123')).toBe(false);
    expect(isValidIranMobile('+98123456789')).toBe(false);
  });
  it('normalizes to +989…', () => {
    expect(normalizeIranMobile('09123456789')).toBe('+989123456789');
    expect(normalizeIranMobile('+989123456789')).toBe('+989123456789');
    expect(normalizeIranMobile('00989123456789')).toBe('+989123456789');
  });
});
