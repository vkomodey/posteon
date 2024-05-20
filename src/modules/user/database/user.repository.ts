import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.db.entity';
import { UserEntity } from '../domain/user.entity';
import { DataMapper } from 'src/lib/domain/data.mapper';

@Injectable()
export class UserRepository {
  private dataMapper: UserMapper;
  constructor(@InjectRepository(User) private dbRepo: Repository<User>) {
    this.dataMapper = new UserMapper();
  }

  async findById(id: string): Promise<UserEntity | null> {
    const userDbEntity = await this.dbRepo.findOneBy({ id: id });
    if (!userDbEntity) {
      return null;
    }
    return this.dataMapper.toDomain(userDbEntity);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const userDbEntity = await this.dbRepo.findOneBy({ email });

    if (!userDbEntity) {
      return null;
    }

    return this.dataMapper.toDomain(userDbEntity);
  }

  async existsByEmail(email: string): Promise<boolean> {
    const numberOfDocs = await this.dbRepo.countBy({ email });

    return numberOfDocs > 0;
  }

  async save(user: UserEntity): Promise<void> {
    const userDbEntity = this.dataMapper.toPersistence(user);

    await this.dbRepo.save(userDbEntity);
  }
}

export class UserMapper implements DataMapper<UserEntity, User> {
  toPersistence(user: UserEntity): User {
    const userDbObject = new User();
    userDbObject.id = user.id;
    userDbObject.email = user.email.value;
    userDbObject.firstName = user.firstName;
    userDbObject.lastName = user.lastName;
    userDbObject.phone = user.phone.value;
    userDbObject.password = user.password;

    return userDbObject;
  }

  toDomain(userDbObject: User): UserEntity {
    return new UserEntity(
      userDbObject.id,
      userDbObject.firstName,
      userDbObject.lastName,
      userDbObject.phone,
      userDbObject.email,
      userDbObject.password,
      userDbObject.createdAt,
      userDbObject.updatedAt,
    );
  }
}
