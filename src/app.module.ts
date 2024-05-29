import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from './config';
import { TypeOrmConfigService } from './db/db.config';
import { APIModule } from './modules/api/api.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    UserModule,
    APIModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: { target: 'pino-pretty' },
      },
    }),
  ],
})
export class AppModule {}
