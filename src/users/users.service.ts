import { Injectable } from '@nestjs/common';
import { Apartment, User } from '@prisma/client';
import { PrismaService } from '../orm/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { MarkFavouriteInput } from './dto/mark-favourite.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserInput: CreateUserInput): Promise<User> {
    return this.prismaService.user.create({ data: createUserInput });
  }

  findAll(): Promise<Array<User>> {
    return this.prismaService.user.findMany();
  }

  findOne(id: number): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async favourites(id: number): Promise<Array<Apartment>> {
    const favourites = await this.prismaService.userFavourites.findMany({
      where: { userId: id },
      include: { apartment: { include: { city: true } } },
    });
    return favourites.map((favourite) => favourite.apartment);
  }

  async addFavourite(
    markFavouriteInput: MarkFavouriteInput,
  ): Promise<Array<Apartment>> {
    await this.prismaService.userFavourites.create({
      data: {
        userId: markFavouriteInput.userId,
        apartmentId: markFavouriteInput.apartmentId,
      },
    });

    const favourites = await this.prismaService.userFavourites.findMany({
      where: { userId: markFavouriteInput.userId },
      include: { apartment: { include: { city: true } } },
    });
    return favourites.map((favourite) => favourite.apartment);
  }

  update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserInput,
    });
  }

  remove(id: number): Promise<User> {
    return this.prismaService.user.update({
      where: { id },
      data: { voidedAt: new Date().toString() },
    });
  }
}
