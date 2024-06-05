import { Entity } from 'src/lib/domain/entity';
import {
  PostcellSize,
  PostcellStatus,
  PostcellWeight,
} from '../postcell.constants';

export class PostcellEntity extends Entity {
  size: PostcellSize;
  weight: PostcellWeight;
  status: PostcellStatus;

  constructor(
    id: string,
    size: PostcellSize,
    weight: PostcellWeight,
    status: PostcellStatus,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
    this.size = size;
    this.weight = weight;
    this.status = status;
  }

  validate() {}
}
