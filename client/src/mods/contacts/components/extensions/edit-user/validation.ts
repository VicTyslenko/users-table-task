import { z } from "zod";

export const editUserSchema = z.object({
  DisplayName: z.string().min(2).max(50).trim(),
  Email: z.string().email().trim(),
  BlockAccess: z.boolean(),
  O365Email: z
    .string()
    .trim()
    .refine((val) => val === "" || z.string().email().safeParse(val).success, { message: "Must be a valid email or empty" }),

  MFA_Mobile: z
    .string()
    .min(8)
    .max(15)
    .regex(/^[\d-]+$/, { message: "Must contain only digits" })
    .trim(),
  UserID: z.number(),
});
