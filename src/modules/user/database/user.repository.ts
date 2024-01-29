import { Injectable } from '@nestjs/common';

import { Email } from 'src/lib/value-objects/email';
import { Repository } from 'typeorm';
import { UserEntity } from '../domain/user.entity';
import { UserMapper } from '../domain/user.mapper';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  async findByEmail(email: Email): Promise<UserEntity> {
    const user = await this.findOneBy({ email: email.value });
    // TODO best idea is to inject user mapper
    const userMapper = new UserMapper();

    return userMapper.toDomain(user);
  }
}
