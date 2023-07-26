import { Injectable } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from './entities/result.entity';
@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Result)
    private readonly resultRepository: Repository<Result>,
  ) {}

  async create(createResultDto: CreateResultDto) {
    const result = this.resultRepository.create(createResultDto);
    return this.resultRepository.save(result);
  }

  async findAll() {
    return this.resultRepository.find();
  }

  findOne(id: number) {
    return this.resultRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateResultDto: UpdateResultDto) {
    await this.resultRepository.update(id, updateResultDto);
    return this.resultRepository.findOne({ where: { id: id } });
  }

  async remove(id: number) {
    return this.resultRepository.delete(id);
  }
}
