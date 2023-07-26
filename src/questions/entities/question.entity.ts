import { Answer } from 'src/answer/entities/answer.entity';
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

  // Relationship with Quiz
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  // Relationship with Answer
  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];

}
