import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum ProfileProfession {
  CLIENT = 'client',
  CONTRACTOR = 'contractor',
}

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  balance: number;

  @Column({
    type: 'enum',
    enum: ProfileProfession,
  })
  profession: ProfileProfession;
}
