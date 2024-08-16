import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { UserRepositoryInterface } from '../../../../mock-module/domain/dtos/repositories/user.repository';

@Injectable()
export class UserRepository extends Repository<User> implements UserRepositoryInterface {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
}
