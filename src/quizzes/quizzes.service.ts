import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './entities/quiz.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  async create(createQuizDto: CreateQuizDto) {
    const quiz = this.quizRepository.create(createQuizDto);
    return this.quizRepository.save(quiz);
  }

  findAll() {
    return this.quizRepository.find(); // find all quizzes
  }

  async findOne(id: number) {
    const quiz = await this.quizRepository.findOne({ where: { id: id } });
    if (!quiz) {
      throw new NotFoundException(`Quiz #${id} not found`);
    }
    return quiz;
  }

  async update(id: number, updateQuizDto: UpdateQuizDto) {
    const quiz = await this.quizRepository.findOne({ where: { id: id } });
    if (!quiz) {
      throw new NotFoundException(`Quiz #${id} not found`);
    }
    if (updateQuizDto.name) {
      quiz.name = updateQuizDto.name;
    }
    if (updateQuizDto.questions) {
      // You would need to load the questions from the database and then assign them.
      // I am skipping this part as you would need to define how you want to handle it.
      // quiz.questions = ...
    }
    return this.quizRepository.save(quiz);
  }
  async remove(id: number) {
    const quiz = await this.findOne(id);
    return this.quizRepository.remove(quiz); // Remove the quiz
  }
}
