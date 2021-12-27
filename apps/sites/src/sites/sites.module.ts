import { Module } from '@nestjs/common'

import { SitesService } from './sites.service'
import { SitesResolver } from './sites.resolver'
import { CoporatesReferenceResolver } from './corporates.reference.resolver'

@Module({
  imports: [],
  providers: [SitesResolver, CoporatesReferenceResolver, SitesService],
})
export class SitesModule {}
