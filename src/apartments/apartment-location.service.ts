import { Injectable } from '@nestjs/common';
import { Apartment } from '@prisma/client';
import { PrismaService } from '../orm/prisma.service';
import { ApartmentSearchInput } from './dto/apartment-search-input';

@Injectable()
export class ApartmentLocationQuery {
  constructor(private readonly prismaService: PrismaService) {}

  findByDistance(input: ApartmentSearchInput): Promise<Array<Apartment>> {
    return this.prismaService.$queryRaw<Array<Apartment>>(
      this.rawFindQuery(input),
    );
  }

  private rawFindQuery(input: ApartmentSearchInput): string {
    const { lat, lon, distance, ...rest } = input;
    delete input.lat;
    delete input.lon;
    delete input.distance;
    const normal = Object.keys(rest)
      .map((key: string) => `${key}=${input[key]}`)
      .join(' AND ');

    return `SELECT * FROM apartment WHERE ${
      normal ? `${normal} AND` : ''
    } ${this.distanceFilter(distance, lat, lon)}`;
  }

  private distanceFilter(distance: number, lat: number, lon: number): string {
    return `111.111 * DEGREES(ACOS(LEAST(1.0, COS(RADIANS(${lat})) * COS(RADIANS(lat)) * COS(RADIANS(${lon} - lon)) + SIN(RADIANS(${lat})) * SIN(RADIANS(lat))))) <= ${distance}`;
  }
}
