import { z } from 'zod';

export const CreateMovieZodSchema = z.object({
  image: z.string().url(),
  title: z.string(),
  dateCreated: z.string().transform((dateString) => new Date(dateString)),
  rating: z.number().min(1).max(8),
  genderId: z.number().min(1),
});
