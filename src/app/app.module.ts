import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EncryptingService } from '../shared/infra/service/encrypting-service.service';
import { MatrixController } from '../shared/infra/http/controllers/matrix.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [MatrixController],
  providers: [
    EncryptingService
  ],
})
export class AppModule {}
