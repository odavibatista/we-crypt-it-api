import { Injectable } from '@nestjs/common';
import { KeyProvider } from '../providers/Key.provider';
import { GenerateKeysReturnDTO } from '../../domain/dtos/request/GenerateKeys.request.dto';

@Injectable()
export class KeysService {
    constructor(
        private readonly keyProvider: KeyProvider
    ) {}

    async generateKeys(): Promise<GenerateKeysReturnDTO> {
        return {
            iv: this.keyProvider.generateIV(),
            secret: this.keyProvider.generateSecret()
        }
    }
}
