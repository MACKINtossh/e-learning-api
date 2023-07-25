import { IsString, IsArray, ArrayMinSize } from 'class-validator';

// UpdateQuizDto
export class UpdateQuizDto {
  @IsString()
  name?: string;

  @IsArray()
  @ArrayMinSize(1)
  questions?: number[]; // an array of question IDs
}
