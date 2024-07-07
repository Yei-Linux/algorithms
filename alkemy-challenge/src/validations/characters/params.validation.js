import { z } from 'zod';

const paramsValidation = z.object({
  id: z.number({ coerce: true }),
});

export const GetCharacterParamValidation = paramsValidation;
export const UpdateCharacterParamValidation = paramsValidation;
