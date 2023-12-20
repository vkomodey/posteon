import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Email } from 'src/lib/value-objects/email';
import { UserEntity } from '../domain/user.entity';
import { UserMapper } from '../domain/user.mapper';

export class UserRepository extends Repository<User> {
  async findByEmail(email: Email): Promise<UserEntity> {
    const user = await this.findOneBy({ email: email.value });
    const userMapper = new UserMapper();

    return userMapper.toDomain(user);
  }
}
