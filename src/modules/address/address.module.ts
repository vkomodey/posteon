import { Module } from '@nestjs/common';
import { AddressRepository } from './database/address.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './database/address.db.entity';

@Module({
  providers: [AddressRepository],
  exports: [AddressRepository],
  imports: [TypeOrmModule.forFeature([Address])],
})
export class AddressModule {}
