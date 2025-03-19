import { z } from "zod";

// Define the Login form schema
export const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

// Infer the TypeScript type from the schema
export type LoginFormData = z.infer<typeof loginSchema>;