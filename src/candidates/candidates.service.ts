// src/candidates/candidates.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './candidate.entity';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate)
    private candidatesRepository: Repository<Candidate>,
  ) {}

  findAll(): Promise<Candidate[]> {
    return this.candidatesRepository.find();
  }

  create(candidate: Partial<Candidate>): Promise<Candidate> {
    const newCandidate = this.candidatesRepository.create(candidate);
    return this.candidatesRepository.save(newCandidate);
  }

  // You can add update/delete later
}
