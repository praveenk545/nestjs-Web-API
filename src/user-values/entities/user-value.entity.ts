import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserValue {
  @PrimaryGeneratedColumn()
  id: string;
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  name: string;

  @Column({ default: null })
  password: string;

  @Column({ nullable: true })
  email: string;

  @Column({ default: null })
  Date: Date;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createAt: string;

  @UpdateDateColumn()
  updateAt: string;
}
