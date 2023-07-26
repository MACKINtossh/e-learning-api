import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';
import { Quiz } from 'src/quizzes/entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Quiz])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
