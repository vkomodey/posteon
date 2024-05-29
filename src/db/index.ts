import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmConfigService } from './db.config';

@Module({
  imports: [ConfigService],
  providers: [TypeOrmConfigService],
})
export class DbConfig {}
