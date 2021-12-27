import { Resolver, Parent, ResolveField } from '@nestjs/graphql'

import { Site } from './entities/site.entity'
import { SitesService } from './sites.service'
import { Corporate } from './entities/orphaned/corporate.entity'

@Resolver(of => Corporate)
export class CoporatesReferenceResolver {
  constructor(private readonly sitesService: SitesService) {}

  @ResolveField(of => [Site])
  public sites(@Parent() corporate: Corporate) {
    return this.sitesService.findAll()
  }
}
