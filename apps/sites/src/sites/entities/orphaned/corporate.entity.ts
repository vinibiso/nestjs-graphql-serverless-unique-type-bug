import { Field, ObjectType, Directive } from '@nestjs/graphql'

import { Site } from '../site.entity'

@Directive('@extends')
@Directive(`@key(fields: "urlPrefix")`)
@ObjectType('Corporate')
export class Corporate {
  @Directive('@external')
  @Field(type => String)
  urlPrefix: string

  @Field(type => [Site])
  sites: Site[]
}
