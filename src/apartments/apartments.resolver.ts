import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ApartmentsService } from './apartments.service';
import { Apartment } from './entities/apartment.entity';
import { CreateApartmentInput } from './dto/create-apartment.input';
import { UpdateApartmentInput } from './dto/update-apartment.input';
import { ApartmentSearchInput } from './dto/apartment-search.input';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { BadRequestException, UseGuards } from '@nestjs/common';

@UseGuards(GqlAuthGuard)
@Resolver(() => Apartment)
export class ApartmentsResolver {
  constructor(private readonly apartmentsService: ApartmentsService) {}
  @Mutation(() => Apartment)
  createApartment(
    @Args('createApartmentInput') createApartmentInput: CreateApartmentInput,
  ) {
    return this.apartmentsService.create(createApartmentInput);
  }

  @Query(() => [Apartment], { name: 'apartments' })
  findAll(
    @Args('apartmentSearchInput', { nullable: true })
    apartmentSearchInput?: ApartmentSearchInput,
  ) {
    if (
      apartmentSearchInput.distance &&
      !(apartmentSearchInput.lat && apartmentSearchInput.lon)
    ) {
      throw new BadRequestException(
        'To search by distance you must specify lat and lon.',
      );
    }
    return this.apartmentsService.findAll(apartmentSearchInput);
  }

  @Query(() => Apartment, { name: 'apartment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.apartmentsService.findOne(id);
  }

  @Mutation(() => Apartment)
  updateApartment(
    @Args('updateApartmentInput') updateApartmentInput: UpdateApartmentInput,
  ) {
    return this.apartmentsService.update(
      updateApartmentInput.id,
      updateApartmentInput,
    );
  }

  @Mutation(() => Apartment)
  removeApartment(@Args('id', { type: () => Int }) id: number) {
    return this.apartmentsService.remove(id);
  }
}
