import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostboxStatuses } from '../postbox.constants';
import { Address } from 'src/modules/address/database/address.db.entity';

@Entity()
export class Postbox {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    name: 'status',
    enum: PostboxStatuses,
  })
  status: PostboxStatuses;

  @ManyToOne(() => Address)
  @JoinTable()
  address: Address;

  @CreateDateColumn({
    type: 'date',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'date',
    name: 'updated_at',
  })
  updatedAt: Date;
  postcells: any;
}
