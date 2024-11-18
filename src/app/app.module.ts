import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EncryptingService } from '../shared/infra/service/encrypting-service.service';
import { MatrixController } from '../shared/infra/http/controllers/matrix.controller';
import { KeysService } from '../shared/infra/service/keys.service';
import { KeysController } from '../shared/infra/http/controllers/keys.controller';
import { KeyProvider } from '../shared/infra/providers/Key.provider';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [MatrixController, KeysController,],
  providers: [
    EncryptingService,
    KeysService,
    KeyProvider
  ],
})
export class AppModule {}
