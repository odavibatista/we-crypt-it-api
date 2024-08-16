import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { UserRepository } from './user.repository';
import { User } from '../entity/user.entity';

describe('User Repository Test Suites', () => {
  let userRepository: UserRepository;

  const dataSource = {
    createEntityManager: jest.fn(),
  };

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: DataSource,
          useValue: dataSource,
        },
      ],
    }).compile();

    userRepository = module.get<UserRepository>(UserRepository);
  });

  
});
