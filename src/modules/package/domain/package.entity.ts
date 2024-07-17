import { v4 as uuid } from 'uuid';
import { Entity } from 'src/lib/domain/entity';
import {
  PackageSize,
  PackageStatus,
  PackageWeight,
} from '../package.constants';
import { PostcellEntity } from 'src/modules/postbox/postcell/domain/postcell.entity';
import { PackageActivity } from './package.activity.entity';
import { UserEntity } from 'src/modules/user/domain/user.entity';
import { PackageDelivery } from './package.delivery';
import { PackageStatusTransitions } from './delivery.state-transition';
import { IllegalEntityState } from 'src/lib/domain/errors';

export class PackageEntity extends Entity {
  size: PackageSize;
  weight: PackageWeight;
  status: PackageStatus;
  activity: PackageActivity[];
  delivery: PackageDelivery;
  sender: UserEntity;
  receiver: UserEntity;
  senderPostboxCell: PostcellEntity;
  receiverPostboxCell: PostcellEntity;

  constructor(
    id: string,
    size: PackageSize,
    weight: PackageWeight,
    delivery: PackageDelivery,
    sender: UserEntity,
    status: PackageStatus,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
    this.size = size;
    this.weight = weight;
    this.delivery = delivery;
    this.sender = sender;
    this.status = status;
  }

  changeStatus(newStatus: PackageStatus) {
    const possibleOutcomesFromTheCurrentStatus = PackageStatusTransitions.get(
      this.status,
    );

    if (!possibleOutcomesFromTheCurrentStatus.includes(newStatus)) {
      throw new IllegalEntityState(
        `Can't make transition from ${this.status} to ${newStatus}`,
        [],
      );
    }

    this.status = newStatus;
    const activity = new PackageActivity(uuid());
    this.activity.push(activity);
  }

  setReceiver(receiver: UserEntity) {
    this.receiver = receiver;
  }

  validate() {}
}
