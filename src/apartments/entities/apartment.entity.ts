import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { City } from '../../cities/entities/city.entity';
import { User } from '../..//users/entities/user.entity';

@ObjectType()
export class Apartment {
  @Field(() => Int, { description: "The apartment's identifier." })
  id: number;

  @Field(() => String, { description: "The apartment's name." })
  name: string;

  @Field(() => Float, { description: "The apartment's latitude." })
  lat: number;

  @Field(() => Float, { description: "The apartment's longitude." })
  lon: number;

  @Field(() => Int, { description: "The apartment's number of rooms." })
  rooms: number;

  @Field(() => User, { description: "The apartment's owner." })
  user: User;

  @Exclude()
  @Field(() => Int, { description: "The apartment's owner." })
  userId: number;

  @Field(() => [User], { nullable: true })
  followers?: Array<User>;

  @Exclude()
  @Field(() => Int, { description: "The apartment's city." })
  cityId: number;

  @Field(() => City)
  city: City;

  @Field(() => Date, { description: "The apartment's created date." })
  createdAt: Date;

  @Field(() => Date, { description: "The apartment's updated date." })
  updatedAt: Date;
}
