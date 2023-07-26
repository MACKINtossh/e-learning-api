import { IsNotEmpty } from 'class-validator';

export class CreateUserAnswerDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  answerId: number;
}
