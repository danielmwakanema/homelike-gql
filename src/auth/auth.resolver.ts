import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { ParseUserPipe } from './pipes/parse-user.pipe';
import { LoginInput } from './dto/login.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  register(
    @Args('registerUserInput', ParseUserPipe)
    registerUserInput: CreateUserInput,
  ) {
    return this.authService.register(registerUserInput);
  }

  @Mutation(() => Auth)
  async login(@Args('loginUserInput') { username, password }: LoginInput) {
    return {
      token: await this.authService.login(username, password),
    };
  }
}
