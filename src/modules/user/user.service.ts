import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './database/user.entity';
import { UserRepository } from './database/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: UserRepository,
  ) { }

  async create(name: string): Promise<string> {
    const user = new User();
    user.firstName = name;
    user.lastName = name;

    const result = await this.usersRepository.save(user);

    return result.id;
  }

  findById(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }
}
