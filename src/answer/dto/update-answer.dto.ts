import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateAnswerDto {
  @IsString()
  text?: string;

  @IsBoolean()
  isCorrect?: boolean;
}