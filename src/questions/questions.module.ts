import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { Question } from './entities/question.entity';
import { Answer } from 'src/answer/entities/answer.entity';
import { Quiz } from 'src/quizzes/entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Answer, Quiz])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
 