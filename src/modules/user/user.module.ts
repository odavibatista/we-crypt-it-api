import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserRepository } from './repository/user.repository';
import { JWTProvider } from './providers/jwt.provider';
import { HashProvider } from './providers/hash.provider';
import { EncrypterProvider } from '../../shared/infra/providers/Encrypter.provider';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, JWTProvider, HashProvider, EncrypterProvider]
})
export class UserModule {}
