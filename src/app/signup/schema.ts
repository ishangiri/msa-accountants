import { z } from "zod";

// Define the Sign Up form schema
export const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    surname: z.string().min(1, "Surname is required"),
    organization: z.string().optional(),
    dobDay: z.string().optional(),
    dobMonth: z.string().optional(),
    dobYear: z.string().optional(),
    gender: z.string().optional(),
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phone: z.string().optional(),
    mobile: z.string().optional(),
    fax: z.string().optional(),
    topics: z.array(z.string()).optional(),
    receiveNews: z.boolean().optional(),
    receiveNewsletter: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Infer the TypeScript type from the schema
export type SignUpFormData = z.infer<typeof signUpSchema>;