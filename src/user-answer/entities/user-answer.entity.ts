import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Answer } from 'src/answer/entities/answer.entity';

@Entity()
export class UserAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relationship with User
  @ManyToOne(() => User, (user) => user.userAnswers)
  user: User;

  // Relationship with Answer
  @ManyToOne(() => Answer, (answer) => answer.userAnswers)
  answer: Answer;
}
