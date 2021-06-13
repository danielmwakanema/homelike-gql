import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String, { description: "The user's firstname." })
  firstname: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, { description: "The user's lastname." })
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, { description: "The user's username." })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @Field(() => String, { description: "The user's email." })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, { description: "The user's password." })
  password: string;
}
