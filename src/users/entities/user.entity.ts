import { Course } from 'src/courses/entities/course.entity';
import { Result } from 'src/results/entities/result.entity';
import { UserAnswer } from 'src/user-answer/entities/user-answer.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
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

  // Relationship with UserAnswer
  @OneToMany(() => UserAnswer, (userAnswer) => userAnswer.user)
  userAnswers: UserAnswer[];

  // Relationship with Course
  @ManyToMany(() => Course, (course) => course.users)
  @JoinTable() // This decorator is needed to create the join table in many-to-many relationship
  courses: Course[];
}
