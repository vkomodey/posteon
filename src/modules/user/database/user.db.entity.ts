import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    name: 'first_name',
    length: 50,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    name: 'last_name',
    length: 50,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    name: 'phone',
    length: 30,
  })
  phone: string;

  @Column({
    type: 'varchar',
    name: 'email',
    length: 60,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    name: 'password',
  })
  password: string;

  @CreateDateColumn({
    type: "date",
    name: "created_at",
  })
  createdAt: Date;


  @UpdateDateColumn({
    type: "date",
    name: "updated_at",
  })
  updatedAt: Date;
}
