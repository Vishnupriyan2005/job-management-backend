// src/candidates/candidates.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { Candidate } from './candidate.entity';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  findAll(): Promise<Candidate[]> {
    return this.candidatesService.findAll();
  }

  @Post()
  create(@Body() body: Partial<Candidate>): Promise<Candidate> {
    return this.candidatesService.create(body);
  }
}
