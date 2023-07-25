import { Quiz } from 'src/quizzes/entities/quiz.entity';
import { UserAnswer } from 'src/user-answer/entities/user-answer.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
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

  // Relationship with UserAnswer
  @OneToMany(() => UserAnswer, (userAnswer) => userAnswer.question)
  userAnswers: UserAnswer[];
}
