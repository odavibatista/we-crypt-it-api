import { Injectable } from '@nestjs/common';
import { EncrypterProvider } from '../providers/Encrypter.provider';
import { matrixValidate } from '../../utils/Matrix.validator';
import { UnprocessableDataException } from '../../domain/errors/UnprocessableData.exception';
import { EncryptMatrixParamsDTO, EncryptMatrixReturnDTO } from '../../domain/dtos/request/EncryptMatrix.request.dto';
import { DecryptMatrixParamsDTO, DecryptMatrixReturnDTO } from '../../domain/dtos/request/DecryptMatrix.request.dto';
import { InvalidKeysException } from '../../domain/errors/InvalidKeys.exception';
import { validateKey } from '../../utils/KeyLength.validate';

@Injectable()
export class EncryptingService {
    constructor() {}

    async encryptMatrix(data: EncryptMatrixParamsDTO): Promise<EncryptMatrixReturnDTO> {
        if (data.iv.length !== 16 || data.secret.length !== 32) {
            throw new InvalidKeysException();
        }

        if (!matrixValidate(data.matrix)) {
            throw new UnprocessableDataException("Matriz inválida. Insira uma válida.")
        }

        const encrypterProvider = new EncrypterProvider(data.iv, data.secret);

        return {
            encryptedMatrix: encrypterProvider.encrypt({content: data.matrix})
        }
    }

    async decryptMatrix(data: DecryptMatrixParamsDTO): Promise<DecryptMatrixReturnDTO> {
        if (data.iv.length !== 16 || data.secret.length !== 32) {
            throw new InvalidKeysException();
        }

        const encrypterProvider = new EncrypterProvider(data.iv, data.secret);

        try {
            const decryptedMatrix = encrypterProvider.decrypt({content: data.encryptedMatrix});

            if(!matrixValidate(decryptedMatrix)) {
                throw new UnprocessableDataException("Matriz inválida. Insira uma válida.")
            }
    
            return {
                decryptedMatrix
            }
        } catch (error) {
            throw new InvalidKeysException();
        }
    }
}
