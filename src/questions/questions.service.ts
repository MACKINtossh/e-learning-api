import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from 'src/quizzes/entities/quiz.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const quiz = await this.quizRepository.findOne({
      where: { id: createQuestionDto.quizId },
    });
    const question = this.questionRepository.create({
      ...createQuestionDto,
      quiz, // Replace quizId with the actual quiz instance.
    });
    return this.questionRepository.save(question);
  }

  findAll() {
    return this.questionRepository.find();
  }

  async findOne(id: number) {
    const question = await this.questionRepository.findOne({
      where: { id: id },
    });
    if (!question) {
      throw new NotFoundException(`Question #${id} not found`);
    }
    return question;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const question = await this.questionRepository.preload({
      id,
      ...updateQuestionDto,
    });
    if (!question) {
      throw new NotFoundException(`Question #${id} not found`);
    }
    return this.questionRepository.save(question);
  }

  async remove(id: number) {
    const question = await this.findOne(id); // Reuse findOne to ensure question exists
    return this.questionRepository.remove(question);
  }
}
