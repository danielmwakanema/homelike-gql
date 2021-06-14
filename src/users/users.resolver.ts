import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { Apartment } from 'src/apartments/entities/apartment.entity';
import { MarkFavouriteInput } from './dto/mark-favourite.input';

@UseGuards(GqlAuthGuard)
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Query(() => [Apartment])
  favourites(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.favourites(id);
  }

  @Mutation(() => [Apartment])
  markFavourite(
    @Args('markFavouriteInput') markFavouriteInput: MarkFavouriteInput,
  ) {
    return this.usersService.addFavourite(markFavouriteInput);
  }
}
