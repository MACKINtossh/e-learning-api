import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserAnswerDto {
  @IsNotEmpty()
  userId?: number;

  @IsNotEmpty()
  answerId?: number;
}
