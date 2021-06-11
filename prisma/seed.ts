import { PrismaClient } from '@prisma/client';
import { COUNTRIES_SEED } from './seeds/countries';
const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    COUNTRIES_SEED.map((country) =>
      prisma.country.create({ data: { name: country } }),
    ),
  );
}

main()
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
