import { Quiz } from 'src/quizzes/entities/quiz.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  question_text: string;

  @Column({ length: 100 })
  correct_answer: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relationship with Quiz
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;
}
