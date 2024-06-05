import { Entity } from 'src/lib/domain/entity';
import { AddressEntity } from 'src/modules/address/domain/address.entity';
import { PostboxStatuses } from '../postbox.constants';

export class PostboxEntity extends Entity {
  address: AddressEntity;
  status: PostboxStatuses;

  constructor(
    id: string,
    address: AddressEntity,
    status: PostboxStatuses,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
    this.address = address;
    this.status = status;
  }

  validate() {}
}
