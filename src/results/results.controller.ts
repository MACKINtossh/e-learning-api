import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('results')
@ApiTags('Results')
export class ResultsController {
  constructor(
    private readonly resultsService: ResultsService,
    private readonly moodleService: MoodleService,
  ) {}

  @Post()
  async create(@Body() createResultDto: CreateResultDto) {
    // Create the result in your database
    const result = await this.resultsService.create(createResultDto);

    // Push the result to Moodle using the MoodleService
    try {
      await this.moodleService.pushQuizResultToMoodle(
        createResultDto.userId,
        createResultDto.quizId,
        createResultDto.totalQuestions,
        createResultDto.totalCorrectAnswers,
      );
    } catch (error) {
      // Handle any errors that might occur during API call
      console.error('Error pushing result to Moodle:', error.message);
      // You may choose to return an appropriate response or handle the error differently
    }

    return result;
  }

  @Get()
  async findAll() {
    return this.resultsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.resultsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateResultDto: UpdateResultDto,
  ) {
    return this.resultsService.update(+id, updateResultDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.resultsService.remove(+id);
  }
}
