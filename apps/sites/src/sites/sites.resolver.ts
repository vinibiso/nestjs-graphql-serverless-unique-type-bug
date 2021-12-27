import { Resolver, Query } from '@nestjs/graphql'

import { Site } from './entities/site.entity'
import { SitesService } from './sites.service'

@Resolver()
export class SitesResolver {
  constructor(private readonly sitesService: SitesService) {}

  @Query(() => [Site])
  sites() {
    return this.sitesService.findAll()
  }
}
