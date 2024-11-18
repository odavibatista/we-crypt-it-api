import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EncryptingService } from '../shared/infra/service/encrypting-service.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [
    EncryptingService
  ],
})
export class AppModule {}
