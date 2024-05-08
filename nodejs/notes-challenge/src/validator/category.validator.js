import { z } from 'zod';

export const categoryCreateValidator = z.object({
  name: z.string().min(3),
});

export const categoryGetParamsValidator = z.object({
  id: z.number({ coerce: true }),
});

export const categoryUpdateParamsValidator = z.object({
  id: z.number({ coerce: true }),
});

export const categoryDeleteParamsValidator = z.object({
  id: z.number({ coerce: true }),
});
