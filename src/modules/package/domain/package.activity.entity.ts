import { Entity } from 'src/lib/domain/entity';

export class PackageActivity extends Entity {
  constructor(id: string, createdAt?: Date, updatedAt?: Date) {
    super(id, createdAt, updatedAt);
  }

  validate() {}
}
