import { Injectable } from '@nestjs/common';
import { Apartment } from '@prisma/client';
import { PrismaService } from '../orm/prisma.service';
import { CreateApartmentInput } from './dto/create-apartment.input';
import { UpdateApartmentInput } from './dto/update-apartment.input';

@Injectable()
export class ApartmentsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createApartmentInput: CreateApartmentInput): Promise<Apartment> {
    return this.prismaService.apartment.create({ data: createApartmentInput });
  }

  findAll(): Promise<Array<Apartment>> {
    return this.prismaService.apartment.findMany();
  }

  findOne(id: number): Promise<Apartment> {
    return this.prismaService.apartment.findUnique({ where: { id } });
  }

  update(
    id: number,
    updateApartmentInput: UpdateApartmentInput,
  ): Promise<Apartment> {
    return this.prismaService.apartment.update({
      where: { id },
      data: updateApartmentInput,
    });
  }

  remove(id: number): Promise<Apartment> {
    return this.prismaService.apartment.update({
      where: { id },
      data: { voidedAt: new Date().toString() },
    });
  }
}
