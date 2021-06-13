import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateApartmentInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String, { description: "The apartment's name." })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Float, { description: "The apartment's latitude." })
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Float, { description: "The apartment's longitude." })
  lon: number;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int, { description: "The apartment's number of rooms." })
  rooms: number;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int, { description: "The apartment's city." })
  cityId: number;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int, { description: "The apartment's owner." })
  userId: number;
}
