import { ObjectLiteral } from 'src/lib/types/object-literal.type';

export interface IRepository<TEntity> {
  findById(id: string): Promise<TEntity | null>;
  findAll(query: ObjectLiteral, limit: number): Promise<TEntity[]>;
  save(e: TEntity): Promise<void>;
}
