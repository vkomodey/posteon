import {v4 as uuid} from 'uuid';
import {Injectable} from '@nestjs/common';

import {UseCase} from 'src/lib/application/interfaces/use-case';
import {UserDTO} from '../../user.dto';
import {UserEntity} from '../../domain/user.entity';
import {UserMapper} from '../../domain/user.mapper';

@Injectable()
export class RegisterUseCase {
  execute(userDto: UserDTO) {
    const userEntity = new UserEntity(uuid(), userDto.firstName, userDto.lastName, userDto.email, userDto.phone);
    const userMapper = new UserMapper();
    const persistence = userMapper.toPersistence(userEntity);
  }
}
