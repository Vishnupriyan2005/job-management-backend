import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Injectable()
export class CandidatesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCandidateDto) {
    return this.prisma.candidate.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        job: {
          connect: { id: data.jobId },
        },
        ...(data.companyId && {
          company: { connect: { id: data.companyId } }
        }),
      },
      include: {
        job: true,
        company: true,
      },
    });
  }
  

  async findAll() {
    return this.prisma.candidate.findMany({
      include: {
        job: true,
        company: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.candidate.delete({ where: { id } });
  }
}
