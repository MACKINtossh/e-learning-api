import { IsString } from 'class-validator';

// UpdateQuestionDto
export class UpdateQuestionDto {
  @IsString()
  question_text?: string;

  @IsString()
  correct_answer?: string;
}
