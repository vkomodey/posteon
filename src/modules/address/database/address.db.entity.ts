import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    name: 'state',
    length: 50,
  })
  state: string;

  @Column({
    type: 'varchar',
    name: 'city',
    length: 100,
  })
  city: string;

  @Column({
    type: 'varchar',
    name: 'address',
    length: 250,
  })
  address: string;

  @Column({
    type: 'varchar',
    name: 'zipcode',
    length: 30,
  })
  zipcode: string;

  @CreateDateColumn({
    type: 'date',
    name: 'created_at',
  })
  createdAt: Date;
}
