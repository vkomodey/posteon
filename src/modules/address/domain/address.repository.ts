import { Injectable, PlainLiteralObject } from '@nestjs/common';
import { IRepository } from 'src/db/repository.interface';
import { AddressEntity } from './address.entity';
import { Address } from '../database/address.db.entity';
import { DataMapper } from 'src/lib/domain/data.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class AddressRepository implements IRepository<Address> {
  private dataMapper: AddressMapper;
  constructor(@InjectRepository(Address) private dbRepo: Repository<Address>) {
    this.dataMapper = new AddressMapper();
  }

  async findById(id: string): Promise<AddressEntity | null> {
    const addressDbEntity = await this.dbRepo.findOneBy({ id });
    if (!addressDbEntity) {
      return null;
    }

    return this.dataMapper.toDomain(addressDbEntity);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll(query: ObjectLiteral): Promise<AddressEntity[]> {
    return [];
  }

  async save(address: AddressEntity): Promise<void> {
    const addressDbEntity = this.dataMapper.toPersistence(address);

    await this.dbRepo.save(addressDbEntity);
  }

  async findOne(queryRaw: PlainLiteralObject) {
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
