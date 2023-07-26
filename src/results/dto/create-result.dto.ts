import { IsString, IsNumber } from 'class-validator';

export class CreateResultDto {
  @IsString()
  userId: string; // the ID of the user this result belongs to

  @IsString()
  quizId: string; // the ID of the quiz this result is for

  @IsNumber()
  score: number; // the user's score on this quiz
}
