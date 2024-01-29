import { Module } from '@nestjs/common';
import { User } from './database/user.db.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserRepository } from './database/user.repository';
import { RegisterUseCase } from './use-cases/register/register.use-case';

@Module({
  providers: [UserService, UserRepository, RegisterUseCase],
  exports: [UserRepository, RegisterUseCase],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
