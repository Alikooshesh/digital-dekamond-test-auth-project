const IR_MOBILE_REGEX = /^(?:09\d{9}|\+989\d{9}|00989\d{9})$/;
export function isValidIranMobile(input: string): boolean {
  return IR_MOBILE_REGEX.test(input.trim());
}
export function normalizeIranMobile(input: string): string {
  const s = input.trim();
  if (s.startsWith("+989")) return s;
  if (s.startsWith("00989")) return "+" + s.slice(2);
  if (s.startsWith("09")) return "+98" + s.slice(1);
  return s;
}
