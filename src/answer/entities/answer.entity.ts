import { Question } from 'src/questions/entities/question.entity';
import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { UserAnswer } from 'src/user-answer/entities/user-answer.entity';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @Exclude()
  @Column()
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.answers)
  question: Question;

  // Relationship with UserAnswer
  @OneToMany(() => UserAnswer, (userAnswer) => userAnswer.answer)
  userAnswers: UserAnswer[];
}
