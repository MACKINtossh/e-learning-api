import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('results')
@ApiTags('Results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Post()
  async create(@Body() createResultDto: CreateResultDto) {
    return this.resultsService.create(createResultDto);
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
  async update(@Param('id') id: string, @Body() updateResultDto: UpdateResultDto) {
    return this.resultsService.update(+id, updateResultDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.resultsService.remove(+id);
  }
}
