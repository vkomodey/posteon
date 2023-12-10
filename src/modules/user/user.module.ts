import { Module } from '@nestjs/common';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
