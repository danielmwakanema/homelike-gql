import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class ApartmentSearchInput {
  @IsNumber()
  @IsOptional()
  @Field(() => Float, { nullable: true })
  rooms: number;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Int)
  cityId: number;

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
