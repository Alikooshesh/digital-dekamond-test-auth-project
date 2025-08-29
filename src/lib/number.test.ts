import { toEnglishDigits } from "./number";

describe("toEnglishDigits", () => {
    it("should convert Persian digits (۰۱۲۳۴۵۶۷۸۹) to English digits", () => {
      expect(toEnglishDigits("۰۱۲۳۴۵۶۷۸۹")).toBe("0123456789");
    });
  
    it("should convert Arabic digits (٠١٢٣٤٥٦٧٨٩) to English digits", () => {
      expect(toEnglishDigits("٠١٢٣٤٥٦٧٨٩")).toBe("0123456789");
    });
  
    it("should leave English digits unchanged", () => {
      expect(toEnglishDigits("1234567890")).toBe("1234567890");
    });
  
    it("should work on mixed Persian/Arabic/English digits", () => {
      expect(toEnglishDigits("۰1٢")).toBe("012");
    });
  });