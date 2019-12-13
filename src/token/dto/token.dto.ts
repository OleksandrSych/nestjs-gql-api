import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class TokenDto {
  @Field(() => ID) id: number;
  @Field({ nullable: false }) userId: number;
  @Field({ nullable: false }) roleId: string;
  @Field({ nullable: false }) username: string;
  @Field({ nullable: false }) refreshToken: string;
  @Field({ nullable: false }) expiresIn: number;
  @Field({ nullable: false }) fingerprint: string;
}
