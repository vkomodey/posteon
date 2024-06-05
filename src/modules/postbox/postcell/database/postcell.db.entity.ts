import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  PostcellSize,
  PostcellStatus,
  PostcellWeight,
} from '../postcell.constants';
import { Postbox } from '../../database/postbox.db.entity';

@Entity()
export class Postcell {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: PostcellSize,
  })
  size: PostcellSize;

  @Column({
    type: 'enum',
    enum: PostcellWeight,
  })
  weight: PostcellWeight;

  @Column({
    type: 'enum',
    enum: PostcellStatus,
  })
  status: PostcellStatus

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne((type) => Postbox, (postbox) => postbox.postcells)
  postbox: Postbox;

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
}
