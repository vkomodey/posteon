import { Module } from '@nestjs/common';
import { ProfileModule } from './modules/profile';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './modules/profile/entity';

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
  ],
})
export class AppModule {}
