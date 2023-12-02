import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserType {
  CLIENT = 'client',
  CONTRACTOR = 'contractor',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.CLIENT
  })
  type: UserType;
}
