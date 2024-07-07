import { z } from 'zod';

export const CreateCharacterZodSchema = z.object({
  image: z.string().url(),
  name: z.string(),
  age: z.number().min(18).max(200),
  weight: z.number(),
  history: z.string().optional(),
});
