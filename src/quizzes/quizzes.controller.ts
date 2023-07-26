import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('courses/:courseId/quizzes')
@ApiTags('Quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  create(
    @Param('courseId') courseId: string,
    @Body() createQuizDto: CreateQuizDto,
  ) {
    return this.quizzesService.create(+courseId, createQuizDto);
  }

  @Get()
  findAll(@Param('courseId') courseId: string) {
    return this.quizzesService.findAll(+courseId);
  }

  @Get(':id')
  findOne(@Param('courseId') courseId: string, @Param('id') id: string) {
    return this.quizzesService.findOne(+courseId, +id);
  }

  @Patch(':id')
  update(
    @Param('courseId') courseId: string,
    @Param('id') id: string,
    @Body() updateQuizDto: UpdateQuizDto,
  ) {
    return this.quizzesService.update(+courseId, +id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('courseId') courseId: string, @Param('id') id: string) {
    return this.quizzesService.remove(+courseId, +id);
  }
}
