import { Test, TestingModule } from '@nestjs/testing';
import { EncryptingService } from './encrypting-service.service';

describe('EncryptingServiceService', () => {
  let service: EncryptingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncryptingService],
    }).compile();

    service = module.get<EncryptingService>(EncryptingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
