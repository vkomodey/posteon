import { Injectable } from '@nestjs/common';
import { AbstractRepository } from 'src/db/repository';
import { Postbox } from './postbox.db.entity';
import { PostboxEntity } from '../domain/postbox.entity';
import { DataMapper } from 'src/lib/domain/data.mapper';
import { AddressMapper } from 'src/modules/address/database/address.repository';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostboxRepository extends AbstractRepository<
  PostboxEntity,
  Postbox
> {
  protected dataMapper: PostboxMapper;
  protected dbRepo: Repository<Postbox>;

  constructor(@InjectRepository(Postbox) dbRepo: Repository<Postbox>) {
    super();
    this.dbRepo = dbRepo;
    this.dataMapper = this.dataMapper;
  }
}

export class PostboxMapper implements DataMapper<PostboxEntity, Postbox> {
  addressMapper = new AddressMapper();
  toPersistence(postbox: PostboxEntity): Postbox {
    const postboxDbObject = new Postbox();
    postboxDbObject.id = postbox.id;
    postboxDbObject.status = postbox.status;
    postboxDbObject.address = this.addressMapper.toPersistence(postbox.address);
    return postboxDbObject;
  }

  toDomain(postboxDbObject: Postbox): PostboxEntity {
    return new PostboxEntity(
      postboxDbObject.id,
      this.addressMapper.toDomain(postboxDbObject.address),
      postboxDbObject.status,
      postboxDbObject.createdAt,
      postboxDbObject.updatedAt,
    );
  }
}
