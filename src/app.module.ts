import { Module } from '@nestjs/common';
import { ProfileModule } from './modules/profile';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './modules/profile/entity';
import { ConfigModule } from '@nestjs/config';
import configuration from './config';

@Module({
  imports: [
    ProfileModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'postgres',
      password: 'asdqwe123',
      database: 'payments',
      entities: [ProfileEntity],
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
  ],
})
export class AppModule {}
