import { z } from "zod";

export const addUserSchema = z.object({
  firstName: z.string().min(2).max(15).trim(),
  lastName: z.string().min(2).max(15).trim(),
  email: z.string().email().trim(),
  phoneNumber: z.string().min(11).trim(),
});