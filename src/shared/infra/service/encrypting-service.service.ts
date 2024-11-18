import { Injectable } from '@nestjs/common';
import { EncrypterProvider } from '../providers/Encrypter.provider';
import { matrixValidate } from '../../utils/Matrix.validator';
import { UnprocessableDataException } from '../../domain/errors/UnprocessableData.exception';
import { EncryptMatrixParamsDTO, EncryptMatrixReturnDTO } from '../../domain/dtos/request/EncryptMatrix.request.dto';

@Injectable()
export class EncryptingService {
    constructor() {}

    async encryptMatrix(data: EncryptMatrixParamsDTO): Promise<EncryptMatrixReturnDTO> {
        if (!matrixValidate(data.matrix)) {
            throw new UnprocessableDataException("Matriz inválida. Insira uma válida.")
        }

        const encrypterProvider = new EncrypterProvider(data.iv, data.secret);

        return {
            encryptedMatrix: encrypterProvider.encrypt({content: data.matrix})
        }
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
