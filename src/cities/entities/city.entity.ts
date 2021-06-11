import { ObjectType, Field } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { Country } from 'src/countries/entities/country.entity';

@ObjectType()
export class City {
  @Field(() => String, { description: 'Name of the city.' })
  name: string;

  @Field(() => Country)
  country?: Country;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Exclude()
  @Field()
  retiredAt: Date;
}
