import { Injectable } from '@nestjs/common';
import { EncrypterProvider } from '../providers/Encrypter.provider';
import { matrixValidate } from '../../utils/Matrix.validator';
import { UnprocessableDataException } from '../../domain/errors/UnprocessableData.exception';

@Injectable()
export class EncryptingService {
    constructor() {}

    async encryptMatrix(matrix: string, iv: string, secret: string): Promise<string> {
        if (!matrixValidate(matrix)) {
            throw new UnprocessableDataException("Matriz inválida. Insira uma válida.")
        }

        const encrypterProvider = new EncrypterProvider(iv, secret);

        return encrypterProvider.encrypt({content: matrix});
    }

    async decryptMatrix(encryptedMatrix: string, iv: string, secret: string): Promise<string> {
        const encrypterProvider = new EncrypterProvider(iv, secret);

        const decryptMatrix = encrypterProvider.decrypt({content: encryptedMatrix});

        if(!matrixValidate(decryptMatrix)) {
            throw new UnprocessableDataException("Matriz inválida. Insira uma válida.")
        }

        return decryptMatrix;
    }
}
