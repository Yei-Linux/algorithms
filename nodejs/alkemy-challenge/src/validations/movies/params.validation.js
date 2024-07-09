import { z } from 'zod';

export const GetMovieWithCharactersParamsSchema = z.object({
  id: z.number({ coerce: true }),
});
