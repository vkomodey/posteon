export interface IRepository<TEntity> {
  findById(id: string): Promise<TEntity | null>;
  save(e: TEntity): Promise<void>;
}
