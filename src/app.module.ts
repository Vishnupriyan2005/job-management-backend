import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CandidatesModule } from './candidates/candidates.module';
import { CompaniesModule } from './companies/companies.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [
    PrismaModule,
    CandidatesModule,
    CompaniesModule,
    JobsModule,
  ],
})
export class AppModule {}
