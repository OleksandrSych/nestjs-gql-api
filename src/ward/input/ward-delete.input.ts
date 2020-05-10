import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class WardDeleteInput {
  @Field(() => Int, { nullable: false }) id: number;
  @Field(() => Int, { nullable: false }) version: number;
}
