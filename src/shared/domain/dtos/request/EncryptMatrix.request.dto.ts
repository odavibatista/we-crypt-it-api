import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const EncryptMatrixRequestDTO = z.object({
    matrix: z.string(),
    iv: z.string(),
    secret: z.string()
})

export class EncryptMatrixParamsDTO extends createZodDto(EncryptMatrixRequestDTO) {}

export const EncryptMatrixReturnSchema = z.object({
    encryptedMatrix: z.string()
})

export class EncryptMatrixReturnDTO extends createZodDto(EncryptMatrixReturnSchema) {}