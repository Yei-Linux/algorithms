import { z } from 'zod';

export const AddIntoMovieZodSchema = z.object({
  characterId: z.number().min(1),
  movieId: z.number().min(1),
  duration: z.number().min(1),
});
