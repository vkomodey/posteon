import { Module } from '@nestjs/common';
import { PostboxRepository } from './database/postbox.repository';
import { PostboxEntity } from './domain/postbox.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postbox } from './database/postbox.db.entity';
import { AddressModule } from '../address/address.module';

@Module({
  providers: [PostboxRepository, PostboxEntity],
  exports: [PostboxRepository, PostboxEntity],
  imports: [TypeOrmModule.forFeature([Postbox]), AddressModule],
})
export class PostboxModule {}
