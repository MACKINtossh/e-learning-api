import { ArrayMinSize, IsArray, IsNotEmpty, ValidateNested } from "class-validator";
import { CreateAnswerDto } from "src/answer/dto/create-answer.dto";
import { Type } from 'class-transformer';

// CreateQuestionDto
export class CreateQuestionDto {
  @IsNotEmpty()
  question_text: string;

  @IsNotEmpty()
  quizId: number;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateAnswerDto)
  answers: CreateAnswerDto[];
}
