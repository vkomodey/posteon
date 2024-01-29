import {v4 as uuid} from 'uuid';
import {Inject, Injectable} from '@nestjs/common';

import {UseCase} from 'src/lib/application/interfaces/use-case';
import {UserEntity} from '../../domain/user.entity';
import { UserRepository } from '../../database/user.repository';

@Injectable()
export class RegisterUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(firstName: string, lastName: string, email: string, phone: string, password: string): Promise<void> {

    const userEntity = new UserEntity(uuid(), firstName, lastName, email, phone, password) ;

    this.userRepository.save(userEntity);
  }
}
