import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../orm/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
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
