import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
  ) {}

  // Create a new job
  async create(jobData: Partial<Job>): Promise<Job> {
    const job = this.jobsRepository.create(jobData);
    return this.jobsRepository.save(job);
  }

  // Get all jobs
  async findAll(): Promise<Job[]> {
    return this.jobsRepository.find();
  }

  // Get one job by ID
  async findOne(id: number): Promise<Job | null> {
    return this.jobsRepository.findOneBy({ id });
  }

  // Update job by ID
  async update(id: number, jobData: Partial<Job>): Promise<Job | null> {
    const job = await this.jobsRepository.findOneBy({ id });
    if (!job) return null;

    const updated = Object.assign(job, jobData);
    return this.jobsRepository.save(updated);
  }

  // Delete job by ID
  async remove(id: number): Promise<boolean> {
    const result = await this.jobsRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
