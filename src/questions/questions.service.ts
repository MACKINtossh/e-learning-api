import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from 'src/quizzes/entities/quiz.entity';
import { Answer } from 'src/answer/entities/answer.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Answer) // <- Inject the Answer Repository
    private readonly answerRepository: Repository<Answer>,
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const quiz = await this.quizRepository.findOne({
      where: { id: createQuestionDto.quizId },
    });
    // Map each Answer DTO to an Answer entity and set the corresponding Question
    const answers = createQuestionDto.answers.map((answerDto) => {
      const answer = new Answer();
      answer.text = answerDto.text;
      answer.isCorrect = answerDto.isCorrect;
      return answer;
    });

    const question = this.questionRepository.create({
      ...createQuestionDto,
      quiz, // Replace quizId with the actual quiz instance.
      answers, // Add the created answers to the question.
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

    // Remove old answers and add new ones
    await this.answerRepository.remove(question.answers);
    const answers = updateQuestionDto.answers.map((answerDto) => {
      const answer = new Answer();
      answer.text = answerDto.text;
      answer.isCorrect = answerDto.isCorrect;
      answer.question = question;
      return answer;
    });

    question.answers = answers;

    return this.questionRepository.save(question);
  }
  
  async remove(id: number) {
    const question = await this.findOne(id); // Reuse findOne to ensure question exists
    return this.questionRepository.remove(question);
  }
}
