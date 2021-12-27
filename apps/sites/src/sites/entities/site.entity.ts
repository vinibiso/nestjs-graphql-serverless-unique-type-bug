import { Field, ObjectType, ID, Directive } from '@nestjs/graphql'

import { Address } from './address.entity'

@Directive('@key(fields: "id")')
@ObjectType('Site')
export class Site {
  @Field(type => String)
  id: string

  @Field(type => String)
  name: string

  @Field(type => Address)
  address: Address
}
