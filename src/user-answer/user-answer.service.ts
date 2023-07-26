import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserAnswerDto } from './dto/create-user-answer.dto';
import { UpdateUserAnswerDto } from './dto/update-user-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAnswer } from './entities/user-answer.entity';
import { Answer } from 'src/answer/entities/answer.entity';
@Injectable()
export class UserAnswerService {
  constructor(
    @InjectRepository(UserAnswer)
    private readonly userAnswerRepository: Repository<UserAnswer>,
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  async create(createUserAnswerDto: CreateUserAnswerDto) {
    const answer = await this.answerRepository.findOne({
      where: { id: createUserAnswerDto.answerId },
    });
    const userAnswer = this.userAnswerRepository.create({
      ...createUserAnswerDto,
      answer,
    });
    return this.userAnswerRepository.save(userAnswer);
  }

  findAll() {
    return this.userAnswerRepository.find();
  }

  async findOne(id: number) {
    return this.userAnswerRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateUserAnswerDto: UpdateUserAnswerDto) {
    const userAnswer = await this.userAnswerRepository.preload({
      id,
      ...updateUserAnswerDto,
    });
    if (!userAnswer) {
      throw new NotFoundException(`UserAnswer #${id} not found`);
    }
    return this.userAnswerRepository.save(userAnswer);
  }

  async remove(id: number) {
    const userAnswer = await this.findOne(id);
    return this.userAnswerRepository.remove(userAnswer);
  }
}
