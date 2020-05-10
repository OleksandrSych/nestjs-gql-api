import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class AgreementArgs {
  @Field(() => Int, { nullable: false }) id: number;
}
