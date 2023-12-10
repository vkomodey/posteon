import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async create(name: string): Promise<string> {
    const user = new User();
    user.firstName = name;
    user.lastName = name;

    console.log(user.id);

    const result = await this.usersRepository.save(user);

    return result.id;
  }

  findById(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }
}
