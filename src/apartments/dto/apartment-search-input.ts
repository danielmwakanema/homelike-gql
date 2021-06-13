import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';

@InputType()
export class ApartmentSearchInput {
  @IsNumber()
  @IsOptional()
  @Field(() => Float)
  rooms: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Int)
  cityId: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Int)
  countryId: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Int)
  distance: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Int)
  userLat: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Int)
  userLon: number;
}
