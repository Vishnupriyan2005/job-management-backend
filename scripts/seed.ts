import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.company.create({
    data: {
      name: 'Cybermind Works',
      location: 'Chennai', // ✅ use only fields defined in schema.prisma
    },
  });

  console.log('✅ Company seeded');
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
