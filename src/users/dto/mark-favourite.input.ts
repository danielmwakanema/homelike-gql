import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class MarkFavouriteInput {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  apartmentId: number;
}
