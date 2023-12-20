import { DataMapper } from 'src/lib/data.mapper';
import { UserEntity } from './user.entity';
import { User } from '../database/user.entity';

export class UserMapper implements DataMapper<UserEntity, User> {
  toPersistence(user: UserEntity): User {
    const userDbObject = new User();
    userDbObject.id = user.id;
    userDbObject.email = user.email.value;
    userDbObject.firstName = user.firstName;
    userDbObject.lastName = user.lastName;
    userDbObject.phone = user.phone.value;

    return userDbObject;
  }

  toDomain(userDbObject: User): UserEntity {
    return new UserEntity(
      userDbObject.id,
      userDbObject.firstName,
      userDbObject.lastName,
      userDbObject.phone,
      userDbObject.email,
    );
  }
}
