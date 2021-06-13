import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';

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

  @Field(() => Date, { description: "The user's created date." })
  createdAt: Date;

  @Field(() => Date, { description: "The user's updated date." })
  updatedAt: Date;
}
