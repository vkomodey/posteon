import { Module } from '@nestjs/common';
import { AddressRepository } from './domain/address.repository';

@Module({
  providers: [AddressRepository],
  exports: [AddressRepository],
})
export class AddressModule {}
