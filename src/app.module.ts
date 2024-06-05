import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config';
import { TypeOrmConfigService } from './db/db.config';
import { APIModule } from './modules/api/api.module';
import { LoggerModule } from 'nestjs-pino';
import { AddressModule } from './modules/address/address.module';
import { PostboxModule } from './modules/postbox/postbox.module';
import { PostcellModule } from './modules/postbox/postcell/postcell.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    PostboxModule,
    PostcellModule,
    APIModule,

    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get<string>('env') === 'production';

        return {
          pinoHttp: {
            level: isProduction ? 'info' : 'debug',
            transport: isProduction ? undefined : { target: 'pino-pretty' },
            redact: ['req.headers', 'res.headers'],
          },
        };
      },
    }),
  ],
})
export class AppModule {}
