import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CitiesService } from './cities.service';
import { City } from './entities/city.entity';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly citiesService: CitiesService) {}

  @Mutation(() => City)
  createCity(@Args('createCityInput') createCityInput: CreateCityInput) {
    return this.citiesService.create(createCityInput);
  }

  @Query(() => [City], { name: 'cities' })
  findAll() {
    return this.citiesService.findAll();
  }

  @Query(() => City, { name: 'city' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.citiesService.findOne(id);
  }

  @Mutation(() => City)
  updateCity(@Args('updateCityInput') updateCityInput: UpdateCityInput) {
    return this.citiesService.update(updateCityInput.id, updateCityInput);
  }

  @Mutation(() => City)
  async removeCity(@Args('id', { type: () => Int }) id: number) {
    return this.citiesService.remove(id);
  }
}
