import { Injectable } from '@nestjs/common';
import { AbstractRepository } from 'src/db/repository';
import { DataMapper } from 'src/lib/domain/data.mapper';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostcellEntity } from '../domain/postcell.entity';
import { Postcell } from './postcell.db.entity';

@Injectable()
export class PostcellRepository extends AbstractRepository<
  PostcellEntity,
  Postcell
> {
  protected dataMapper: PostcellMapper;
  protected dbRepo: Repository<Postcell>;

  constructor(@InjectRepository(Postcell) dbRepo: Repository<Postcell>) {
    super();
    this.dbRepo = dbRepo;
    this.dataMapper = this.dataMapper;
  }
}

export class PostcellMapper implements DataMapper<PostcellEntity, Postcell> {
  toPersistence(postcell: PostcellEntity): Postcell {
    const postcellDbObject = new Postcell();
    postcellDbObject.id = postcell.id;
    postcellDbObject.size = postcell.size;
    postcellDbObject.weight = postcell.weight;
    postcellDbObject.status = postcell.status;

    return postcellDbObject;
  }

  toDomain(postcellDbObject: Postcell): PostcellEntity {
    return new PostcellEntity(
      postcellDbObject.id,
      postcellDbObject.size,
      postcellDbObject.weight,
      postcellDbObject.status,
      postcellDbObject.createdAt,
      postcellDbObject.updatedAt,
    );
  }
}
