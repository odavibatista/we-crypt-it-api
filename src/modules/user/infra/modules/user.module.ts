import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from '../http/controllers/user.controller';
import { UserService } from '../service/user.service';
import { UserRepository } from '../db/repositories/user.repository';
import { JWTProvider } from '../providers/jwt.provider';
import { HashProvider } from '../providers/hash.provider';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, JWTProvider, HashProvider, EncrypterProvider]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
