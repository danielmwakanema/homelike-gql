import { Injectable } from '@nestjs/common';
import { City } from '@prisma/client';
import { PrismaService } from 'src/orm/prisma.service';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';

@Injectable()
export class CitiesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCityInput: CreateCityInput): Promise<City> {
    return this.prismaService.city.create({ data: createCityInput });
  }

  findAll(): Promise<Array<City>> {
    return this.prismaService.city.findMany({ include: { country: true } });
  }

  findOne(id: number): Promise<City> {
    return this.prismaService.city.findUnique({
      where: { id },
      include: { country: true },
    });
  }

  update(id: number, updateCityInput: UpdateCityInput): Promise<City> {
    return this.prismaService.city.update({
      where: { id },
      data: updateCityInput,
    });
  }

  remove(id: number): Promise<City> {
    return this.prismaService.city.update({
      where: { id },
      data: { retiredAt: new Date().toString() },
    });
  }
}
