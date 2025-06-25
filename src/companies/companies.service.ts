import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CompanyCreateInput) {
    return this.prisma.company.create({ data });
  }

  findAll() {
    return this.prisma.company.findMany();
  }

  findOne(id: string) {
    return this.prisma.company.findUnique({ where: { id: +id } }); // ✅ Fix here
  }

  update(id: string, data: Prisma.CompanyUpdateInput) {
    return this.prisma.company.update({ where: { id: +id }, data }); // ✅ Fix here
  }

  remove(id: string) {
    return this.prisma.company.delete({ where: { id: +id } }); // ✅ Fix here
  }
}
