import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCityInput {
  @Field(() => String, { description: 'Name of the city.' })
  name: string;

  @Field(() => Int, {
    description: 'Identifier of the country the city is in.',
  })
  countryId: number;
}
