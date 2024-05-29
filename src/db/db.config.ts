import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('db.host'),
      port: this.config.get<number>('db.port'),
      username: this.config.get<string>('db.username'),
      password: this.config.get<string>('db.password'),
      database: this.config.get<string>('db.name'),
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}
