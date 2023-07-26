import {
  ArrayMinSize,
  IsArray,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UpdateAnswerDto } from 'src/answer/dto/update-answer.dto';
import { Type } from 'class-transformer';

// UpdateQuestionDto
export class UpdateQuestionDto {
  @IsString()
  question_text?: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => UpdateAnswerDto)
  answers?: UpdateAnswerDto[];
}
