import { Course } from 'src/courses/entities/course.entity';
import { Question } from 'src/questions/entities/question.entity';
import { Result } from 'src/results/entities/result.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column('text')
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relationship with Course
  @ManyToOne(() => Course, (course) => course.quizzes)
  course: Course[];

  // Relationship with Question
  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];

  // Relationship with Result
  @OneToMany(() => Result, (result) => result.quiz)
  results: Result[];
}
