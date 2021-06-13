import { PrismaClient } from '@prisma/client';
import { COUNTRIES_SEED } from './seeds/countries';
import { MALAWI_CITIES } from './seeds/malawi-cities';
const prisma = new PrismaClient();

async function seedCountries(countries: Array<string>): Promise<void> {
  const mapped = countries.map((country) => ({ name: country }));
  await prisma.country.createMany({ data: mapped });
}

async function seedMalawiCities(cities: Array<string>): Promise<void> {
  const malawi = await prisma.country.findFirst({ where: { name: 'Malawi' } });
  const mapped = cities.map((city) => ({
    name: city,
    countryId: malawi.id,
  }));
  await prisma.city.createMany({ data: mapped });
}

async function main() {
  await seedCountries(COUNTRIES_SEED);
  await seedMalawiCities(MALAWI_CITIES);
}

main()
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
