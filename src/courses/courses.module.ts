import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course } from './entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from 'src/quizzes/entities/quiz.entity';
import { QuizzesService } from 'src/quizzes/quizzes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Quiz])],
  controllers: [CoursesController],
  providers: [CoursesService, QuizzesService],
})
export class CoursesModule {}
