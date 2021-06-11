import { Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from '../orm/prisma.service';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';

@Injectable()
export class CountriesService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createCountryInput: CreateCountryInput) {
    return this.prismaService.country.create({
      data: createCountryInput,
    });
  }

  findAll(): Promise<Array<Country>> {
    return this.prismaService.country.findMany();
  }

  findOne(id: number): Promise<Country> {
    return this.prismaService.country.findUnique({
      where: { id },
      include: { cities: true },
    });
  }

  update(id: number, updateCountryInput: UpdateCountryInput): Promise<Country> {
    return this.prismaService.country.update({
      where: { id },
      data: updateCountryInput,
    });
  }

  remove(id: number): Promise<Country> {
    return this.prismaService.country.update({
      where: { id },
      data: { retiredAt: new Date().toString() },
    });
  }
}
