import { IsNotEmpty } from "class-validator";

// CreateQuestionDto
export class CreateQuestionDto {
  @IsNotEmpty()
  question_text: string;

  @IsNotEmpty()
  correct_answer: string;

  @IsNotEmpty()
  quizId: number;
}
