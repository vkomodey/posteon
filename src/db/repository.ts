import { DataMapper } from 'src/lib/domain/data.mapper';
import { FindOptionsWhere, Repository } from 'typeorm';
import { IRepository } from './repository.interface';

export abstract class AbstractRepository<
  TEntity,
  /**
   * You can't simply use generic type in your queries, so this little hack is required
   * https://github.com/typeorm/typeorm/issues/8939#issuecomment-1272061476
   */
  TDBEntity extends { id: string },
> implements IRepository<TEntity>
{
  protected abstract dataMapper: DataMapper<TEntity, TDBEntity>;
  protected abstract dbRepo: Repository<TDBEntity>;

  async findById(id: string): Promise<TEntity | null> {
    const dbEntity = await this.dbRepo.findOneBy({
      id,
    } as FindOptionsWhere<TDBEntity>);
    if (!dbEntity) {
      return null;
    }

    return this.dataMapper.toDomain(dbEntity);
  }
  async save(e: TEntity): Promise<void> {
    const dbEntity = this.dataMapper.toPersistence(e);

    await this.dbRepo.save(dbEntity);
  }
}
