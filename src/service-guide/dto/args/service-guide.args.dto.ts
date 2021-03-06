import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class ServiceGuideArgsDto {
  @Field(() => Int, { nullable: false }) id: number;
}
