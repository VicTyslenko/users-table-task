import { z } from "zod";

export const addUserSchema = z.object({
  firstName: z.string().min(2).max(15).trim(),
  lastName: z.string().min(2).max(15).trim(),
  Email: z.string().email().trim(),
  MFA_Mobile: z.string().min(11).trim(),
  AdminUser: z.boolean(),
  BlockAccess: z.boolean(),
  O365Email: z.string().email(),
});

export const editUserSchema = z.object({
  DisplayName: z.string().min(2).max(50).trim(),
  Email: z.string().email().trim(),
  AdminUser: z.boolean(),
  BlockAccess: z.number().min(0),
  O365Email: z.string().email().optional(),
  MFA_Mobile: z.string().min(11).trim(),
  UserID: z.number(),
});
