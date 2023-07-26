import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './entities/quiz.entity';
import { Course } from '../courses/entities/course.entity';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async create(courseId: number, createQuizDto: CreateQuizDto): Promise<Quiz> {
    const course = await this.courseRepository.findOne({
      where: { id: courseId },
    });
    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }
    const quiz = this.quizRepository.create({ ...createQuizDto, course });
    return this.quizRepository.save(quiz);
  }

  findAll(courseId: number): Promise<Quiz[]> {
    return this.quizRepository.find({ where: { course: { id: courseId } } });
  }

  async findOne(courseId: number, id: number): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne({
      where: { id: id, course: { id: courseId } },
    });
    if (!quiz) {
      throw new NotFoundException(
        `Quiz with ID ${id} not found in course with ID ${courseId}`,
      );
    }
    return quiz;
  }

  async update(
    courseId: number,
    id: number,
    updateQuizDto: UpdateQuizDto,
  ): Promise<Quiz> {
    const quiz = await this.quizRepository.preload({
      id: id,
      ...updateQuizDto,
    });
    if (!quiz) {
      throw new NotFoundException(
        `Quiz with ID ${id} not found in course with ID ${courseId}`,
      );
    }
    return this.quizRepository.save(quiz);
  }

  async remove(courseId: number, id: number): Promise<void> {
    const quiz = await this.findOne(courseId, id);
    await this.quizRepository.remove(quiz);
  }
}
