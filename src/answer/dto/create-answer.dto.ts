import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsBoolean()
  isCorrect: boolean;
}
