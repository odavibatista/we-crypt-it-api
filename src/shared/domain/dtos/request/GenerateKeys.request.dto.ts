import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const GenerateKeysReturnSchema = z.object({
    iv: z.string().length(16),
    secret: z.string().length(32)
})

export class GenerateKeysReturnDTO extends createZodDto(GenerateKeysReturnSchema) {}