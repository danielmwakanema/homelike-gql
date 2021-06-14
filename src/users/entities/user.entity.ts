import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { Apartment } from '../../apartments/entities/apartment.entity';

@ObjectType()
export class User {
  @Field(() => Int, { description: "The user's identifier." })
  id: number;

  @Field(() => String, { description: "The user's firstname." })
  firstname: string;

  @Field(() => String, { description: "The user's lastname." })
  lastname: string;

  @Field(() => String, { description: "The user's username." })
  username: string;

  @Field(() => String, { description: "The user's email." })
  email: string;

  @Exclude()
  @Field(() => String, { description: "The user's password." })
  password: string;

  @Field(() => Apartment)
  apartments?: Array<Apartment>;

  @Field(() => Apartment)
  favourites?: Array<Apartment>;

  @Field(() => Date, { description: "The user's created date." })
  createdAt: Date;

  @Field(() => Date, { description: "The user's updated date." })
  updatedAt: Date;
}
