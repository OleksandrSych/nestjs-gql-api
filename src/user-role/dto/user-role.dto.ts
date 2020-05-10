import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserRoleDto {
  @Field(() => ID, { nullable: true }) id?: string;
  @Field({ nullable: true }) roleDescription?: string;
  @Field(() => Int, { nullable: true }) version?: number;
}
