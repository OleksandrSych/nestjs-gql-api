import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class WardUpdateInput {
  @Field(() => Int, { nullable: false }) id: number;
  @Field(() => Int, { nullable: false }) userId: number;
  @Field(() => Int, { nullable: true }) customerId: number;
  @Field({ nullable: true }) wardName: string;
  @Field({ nullable: true }) hbDate: Date;
  @Field({ nullable: true }) passportNumber: string;
  @Field({ nullable: true }) passportIssuedBy: string;
  @Field({ nullable: true }) passportIssuedDate: Date;
  @Field(() => [Int], { nullable: true }) socialStatusesIds: number[];
  @Field(() => Int, { nullable: true }) familyStatusId: number;
  @Field(() => Int, { nullable: true }) cityId: number;
  @Field(() => Int, { nullable: true }) districtId: number;
  @Field(() => Int, { nullable: true }) quarterId: number;
  @Field({ nullable: true }) street: string;
  @Field({ nullable: true }) house: string;
  @Field({ nullable: true }) apartment: string;
  @Field({ nullable: true }) floor: string;
  @Field({ nullable: true }) entrance: string;
  @Field({ nullable: true }) phone: string;
  @Field({ nullable: true }) doctorsReport: boolean;
  @Field({ nullable: true }) events: string;
  @Field({ nullable: true }) rem: string;
  @Field(() => Int, { nullable: false }) version: number;
}
