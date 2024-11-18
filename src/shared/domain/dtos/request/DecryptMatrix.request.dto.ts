import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const DecryptMatrixRequestDTO = z.object({
    encryptedMatrix: z.string(),
    iv: z.string(),
    secret: z.string()
})

export class DecryptMatrixParamsDTO extends createZodDto(DecryptMatrixRequestDTO) {}

export const DecryptMatrixReturnSchema = z.object({
    decryptedMatrix: z.string()
})

export class DecryptMatrixReturnDTO extends createZodDto(DecryptMatrixReturnSchema) {}