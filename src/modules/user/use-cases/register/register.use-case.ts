import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as argon2 from 'argon2';

import { UserRepository } from '../../database/user.repository';
import { UserEntity } from '../../domain/user.entity';

@Injectable()
export class RegisterUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(firstName: string, lastName: string, email: string, phone: string, password: string): Promise<void> {

    const hashedPassword = await argon2.hash(password);
    const userEntity = new UserEntity(
      uuid(),
      firstName,
      lastName,
      email,
      phone,
      hashedPassword
    );
    
    const userExists = await this.userRepository.existsByEmail(email);

    if (userExists) {
      throw new BadRequestException({message: 'User already exists by this email'});
    }

    await this.userRepository.save(userEntity);
  }
}
