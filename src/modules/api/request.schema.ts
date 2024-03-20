import { z } from 'zod';


export const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string(),
  password: z.string()
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
