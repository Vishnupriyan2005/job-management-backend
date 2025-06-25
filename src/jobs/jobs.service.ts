import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.job.findMany();
  }

  findOne(id: number) {
    return this.prisma.job.findUnique({ where: { id } });
  }
}
