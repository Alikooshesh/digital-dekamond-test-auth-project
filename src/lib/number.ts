export function toEnglishDigits(input: string): string {
    return input.replace(/[۰-۹]/g, d => String(d.charCodeAt(0) - 1776))
                .replace(/[٠-٩]/g, d => String(d.charCodeAt(0) - 1632));
  }