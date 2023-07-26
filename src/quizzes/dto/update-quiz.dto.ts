import { IsString, IsArray, ArrayMinSize, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UpdateQuestionDto } from 'src/questions/dto/update-question.dto';

// UpdateQuizDto
export class UpdateQuizDto {
  @IsString()
  name?: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => UpdateQuestionDto)
  questions?: UpdateQuestionDto[]; // An array of UpdateQuestionDto
}
