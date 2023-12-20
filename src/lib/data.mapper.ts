export interface DataMapper<T1, T2> {
  toPersistence(domainObject: T1): T2;
  toDomain(persistenceObject: T2): T1;
}
