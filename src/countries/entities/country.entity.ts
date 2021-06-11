import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { City } from 'src/cities/entities/city.entity';

@ObjectType()
export class Country {
  @Field(() => Int)
  id: number;

  @Field(() => String, { description: 'Name of the country' })
  name: string;

  @Field(() => [City])
  cities?: Array<City>;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Exclude()
  @Field()
  retiredAt: Date;
}
