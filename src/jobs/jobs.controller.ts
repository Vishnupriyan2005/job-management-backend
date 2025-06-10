import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './job.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  // Create a new job
  @Post()
  async create(@Body() jobData: Partial<Job>): Promise<Job> {
    return this.jobsService.create(jobData);
  }

  // Get all jobs
  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  // Get one job by ID
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Job> {
    const job = await this.jobsService.findOne(id);
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  // Update a job by ID
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() jobData: Partial<Job>,
  ): Promise<Job> {
    const updated = await this.jobsService.update(id, jobData);
    if (!updated) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return updated;
  }

  // Delete a job by ID
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const deleted = await this.jobsService.remove(id);
    if (!deleted) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
  }
}
