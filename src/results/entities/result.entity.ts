import { Quiz } from 'src/quizzes/entities/quiz.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  totalQuestions: number; // Total questions in the quiz

  @Column('int')
  totalCorrectAnswers: number; // The number of correct answers

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relationship with User
  @ManyToOne(() => User, (user) => user.results)
  user: User;

  // Relationship with Quiz
  @ManyToOne(() => Quiz, (quiz) => quiz.results)
  quiz: Quiz;
}
