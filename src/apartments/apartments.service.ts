import { Injectable } from '@nestjs/common';
import { Apartment } from '@prisma/client';
import { PrismaService } from '../orm/prisma.service';
import { ApartmentLocationQuery } from './apartment-location.service';
import { ApartmentSearchInput } from './dto/apartment-search-input';
import { CreateApartmentInput } from './dto/create-apartment.input';
import { UpdateApartmentInput } from './dto/update-apartment.input';

@Injectable()
export class ApartmentsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly locationQuery: ApartmentLocationQuery,
  ) {}

  create(createApartmentInput: CreateApartmentInput): Promise<Apartment> {
    return this.prismaService.apartment.create({ data: createApartmentInput });
  }

  findAll(
    apartmentSearchInput?: ApartmentSearchInput,
  ): Promise<Array<Apartment>> {
    if (apartmentSearchInput.distance) {
      return this.locationQuery.findByDistance(apartmentSearchInput);
    }

    return this.prismaService.apartment.findMany({
      where: apartmentSearchInput,
    });
  }

  findOne(id: number): Promise<Apartment> {
    return this.prismaService.apartment.findUnique({
      where: { id },
      include: { city: true, user: true },
    });
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
