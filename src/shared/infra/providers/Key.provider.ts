import { randomBytes } from 'crypto';
import { KeyProviderInterface } from '../../domain/providers/Key.provider';

export class KeyProvider implements KeyProviderInterface {
    constructor() {}
    
    public generateIV(): string {
        let iv = randomBytes(8);

        return iv.toString('hex');
    }

    public generateSecret(): string {
        let secret = randomBytes(16);

        return secret.toString('hex');
    }
}