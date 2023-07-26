import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateQuizDto } from 'src/quizzes/dto/create-quiz.dto';
import { Type } from 'class-transformer';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizDto)
  quizzes: CreateQuizDto[];
}
