import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizzesController } from './quizzes.controller';
import { QuizzesService } from './quizzes.service';
import { Quiz } from './entities/quiz.entity';
import { Question } from 'src/questions/entities/question.entity';
import { Course } from 'src/courses/entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question, Course])],
  controllers: [QuizzesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}
