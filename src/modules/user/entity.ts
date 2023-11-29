import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserType {
  CLIENT = 'client',
  CONTRACTOR = 'contractor',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: UserType,
  })
  type: UserType;
}
