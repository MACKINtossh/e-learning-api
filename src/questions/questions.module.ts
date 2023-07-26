import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { Question } from './entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizzesService } from 'src/quizzes/quizzes.service';
import { Quiz } from 'src/quizzes/entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Quiz])],
  controllers: [QuestionsController],
  providers: [QuestionsService, QuizzesService],
})
export class QuestionsModule {}
