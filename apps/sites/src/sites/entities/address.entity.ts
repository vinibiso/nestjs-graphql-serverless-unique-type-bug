import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Address')
export class Address {
  @Field(type => String)
  street?: string

  @Field(type => String)
  number?: string

  @Field(type => String)
  city?: string

  @Field(type => String)
  state?: string

  @Field(type => String)
  country?: string
}
