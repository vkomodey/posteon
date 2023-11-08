import { Module } from '@nestjs/common';
import { ProfileModule } from './modules/profile';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from './config';
import { TypeOrmConfigService } from './db/db.config';

@Module({
  imports: [
    ProfileModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
  ],
})
export class AppModule {}
