import { Module } from '@nestjs/common';
import { APIController } from './api.controller';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [APIController],
  imports: [UserModule, AuthModule],
})
export class APIModule {}
