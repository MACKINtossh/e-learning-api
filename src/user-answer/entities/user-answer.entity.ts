import { Question } from 'src/questions/entities/question.entity';
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
export class UserAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer: string;

  @Column()
  is_correct: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relationship with User
  @ManyToOne(() => User, (user) => user.userAnswers)
  user: User;

  // Relationship with Quiz
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  // Relationship with Question
  @ManyToOne(() => Question, (question) => question.userAnswers)
  question: Question;
}
