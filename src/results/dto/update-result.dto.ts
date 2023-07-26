import { IsString, IsNumber } from 'class-validator';

export class UpdateResultDto {
  @IsString()
  userId?: string; // the ID of the user this result belongs to

  @IsString()
  quizId?: string; // the ID of the quiz this result is for

  @IsNumber()
  totalQuestions?: number; // Total questions in the quiz

  @IsNumber()
  totalCorrectAnswers?: number; // The number of correct answers
}
