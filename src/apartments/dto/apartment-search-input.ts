import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';

@InputType()
export class ApartmentSearchInput {
  @IsNumber()
  @IsOptional()
  @Field(() => Float, { nullable: true })
  rooms: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Int, { nullable: true })
  cityId: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Int, { nullable: true })
  countryId: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Float, { nullable: true })
  distance: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Float, { nullable: true })
  lat: number;

  @IsNumber()
  @IsOptional()
  @Field(() => Float, { nullable: true })
  lon: number;
}
