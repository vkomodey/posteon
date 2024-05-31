import { Injectable } from '@nestjs/common';
import { AddressEntity } from './address.entity';
import { Address } from '../database/address.db.entity';
import { DataMapper } from 'src/lib/domain/data.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractRepository } from 'src/db/repository';

@Injectable()
export class AddressRepository extends AbstractRepository<
  AddressEntity,
  Address
> {
  protected dataMapper: AddressMapper;
  protected dbRepo: Repository<Address>;
  constructor(@InjectRepository(Address) dbRepo: Repository<Address>) {
    super();
    this.dbRepo = dbRepo;
    this.dataMapper = new AddressMapper();
  }

  async findOne(queryRaw: {
    state: string;
    city: string;
    zipcode: string;
    address: string;
  }) {
    const result = await this.dbRepo.findOneBy({
      state: queryRaw.state,
      city: queryRaw.city,
      zipcode: queryRaw.zipcode,
      address: queryRaw.address,
    });

    return this.dataMapper.toDomain(result);
  }
}

export class AddressMapper implements DataMapper<AddressEntity, Address> {
  toPersistence(address: AddressEntity): Address {
    const addressDbObject = new Address();
    addressDbObject.id = address.id;
    addressDbObject.state = address.state;
    addressDbObject.city = address.city;
    addressDbObject.address = address.address;
    addressDbObject.zipcode = address.zipcode;
    addressDbObject.createdAt = address.createdAt;

    return addressDbObject;
  }

  toDomain(address: Address): AddressEntity {
    return new AddressEntity(
      address.state,
      address.city,
      address.address,
      address.zipcode,
      address.id,
      address.createdAt,
    );
  }
}
