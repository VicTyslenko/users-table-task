import { z } from "zod";

export const addUserSchema = z.object({
  firstName: z.string().min(2).max(15).trim(),
  lastName: z.string().min(2).max(15).trim(),
  email: z.string().email().trim(),
  phoneNumber: z.string().min(11).trim(),
});

export const editUserSchema = z.object({
  DisplayName: z.string().min(2).max(50).trim(),
  Email: z.string().email().trim(),
  IsOSPAdmin: z.boolean(),
  BlockAccess: z.number().min(0),
  O365Email: z.string().email().optional(),
  MFA_Mobile: z.string().min(11).trim(),
});
