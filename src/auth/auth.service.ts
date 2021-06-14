import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../orm/prisma.service';
import { CreateUserInput } from '../users/dto/create-user.input';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { Auth } from './entities/auth.entity';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
  ) {}

  async register(registerUserInput: CreateUserInput): Promise<Auth> {
    const user = await this.usersService.create(registerUserInput);
    return { token: this.jwtService.sign(user) };
  }

  async login(username: string, password: string): Promise<string> {
    const user = await this.prismaService.user.findFirst({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException(`User with ${username} was not found.`);
    }

    const validPassword = await this.passwordService.validatePassword(
      password,
      user.password,
    );

    if (!validPassword) {
      throw new BadRequestException('The password supplied is incorrect.');
    }

    return this.jwtService.sign({ token: user });
  }

  validateUser(user: User): Promise<User> {
    return this.prismaService.user.findFirst({ where: { id: user.id } });
  }
}
