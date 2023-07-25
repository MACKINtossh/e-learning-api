import { IsString } from 'class-validator';

export class UpdateUserAnswerDto {
  @IsString()
  userId?: string; // the ID of the user this answer belongs to

  @IsString()
  questionId?: string; // the ID of the question this answer is for

  @IsString()
  answer?: string; // the user's answer
}
