import { IsArray, IsOptional, IsString } from 'class-validator';
import { CreateQuizDto } from 'src/quizzes/dto/create-quiz.dto';

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsArray()
  quizzes?: CreateQuizDto[];
}
