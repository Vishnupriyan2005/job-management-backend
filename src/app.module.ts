import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './companies/company.entity';
import { Job } from './jobs/job.entity';
import { Candidate } from './candidates/candidate.entity';

import { CompaniesModule } from './companies/companies.module';
import { JobsModule } from './jobs/jobs.module';
import { CandidatesModule } from './candidates/candidates.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Vishnu@2005', 
      database: 'job_management',        
      entities: [Company, Job, Candidate],
      synchronize: true,
    }),
    CompaniesModule,
    JobsModule,
    CandidatesModule,
  ],
})
export class AppModule {}
