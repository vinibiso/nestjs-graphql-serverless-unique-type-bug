import { Module } from '@nestjs/common'
import { GraphQLFederationModule } from '@nestjs/graphql'

import { SitesModule } from './sites/sites.module'
import { Corporate } from './sites/entities/orphaned/corporate.entity'


@Module({
  imports: [
    SitesModule,
    GraphQLFederationModule.forRoot({
      introspection: true,
      autoSchemaFile: 'schema.gql',
      buildSchemaOptions: {
        orphanedTypes: [Corporate],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
