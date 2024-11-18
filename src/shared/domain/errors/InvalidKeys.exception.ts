import { HttpException } from '@nestjs/common';

export class InvalidKeysException extends HttpException {
  constructor(message?: string) {
    super(`Chave inválida.`, 401);
  }
}
