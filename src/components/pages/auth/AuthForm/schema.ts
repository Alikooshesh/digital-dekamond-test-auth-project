import { isValidIranMobile } from "@/lib/validation";
import { z } from "zod";

export const schema = z.object({
    phone: z.string().min(1, "Phone is required").refine((v) => isValidIranMobile(v), {
      message: "Use 09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx",
    }),
  });