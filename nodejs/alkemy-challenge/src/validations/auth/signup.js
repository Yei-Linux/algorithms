import { z } from 'zod';

export const SignUpZodSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string(),
  age: z.number({ coerce: true }).min(18),
});
