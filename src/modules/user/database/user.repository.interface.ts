import { IRepository } from 'src/db/repository.interface';
import { UserEntity } from '../domain/user.entity';

export interface IUserRepository extends IRepository<UserEntity> {
  findByEmail(email: string): Promise<UserEntity | null>;
  existsByEmail(email: string): Promise<boolean>;
}
