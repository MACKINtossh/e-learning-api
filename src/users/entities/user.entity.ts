import { Result } from 'src/results/entities/result.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    unique: true,
  })
  username: string;

  @Column({
    length: 50,
  })
  password: string;

  @Column({
    length: 100,
  })
  email: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  // Relationship with Result
  @OneToMany(() => Result, (result) => result.user)
  results: Result[];
}
