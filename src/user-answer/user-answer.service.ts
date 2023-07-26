import { Injectable } from '@nestjs/common';
import { CreateUserAnswerDto } from './dto/create-user-answer.dto';
import { UpdateUserAnswerDto } from './dto/update-user-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAnswer } from './entities/user-answer.entity';
@Injectable()
export class UserAnswerService {
  constructor(
    @InjectRepository(UserAnswer)
    private readonly userAnswerRepository: Repository<UserAnswer>,
  ) {}

  create(createUserAnswerDto: CreateUserAnswerDto) {
    const userAnswer = this.userAnswerRepository.create(createUserAnswerDto);
    return this.userAnswerRepository.save(userAnswer);
  }

  findAll() {
    return `This action returns all userAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAnswer`;
  }

  update(id: number, updateUserAnswerDto: UpdateUserAnswerDto) {
    return this.userAnswerRepository.update(id, updateUserAnswerDto);
  }

  remove(id: number) {
    return `This action removes a #${id} userAnswer`;
  }
}
