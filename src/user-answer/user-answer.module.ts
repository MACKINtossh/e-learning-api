import { Module } from '@nestjs/common';
import { UserAnswerService } from './user-answer.service';
import { UserAnswerController } from './user-answer.controller';
import { UserAnswer } from './entities/user-answer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from 'src/answer/entities/answer.entity';
import { User } from 'src/users/entities/user.entity';
import { Quiz } from 'src/quizzes/entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAnswer, Answer, User, Quiz])],

  controllers: [UserAnswerController],
  providers: [UserAnswerService],
})
export class UserAnswerModule {}
