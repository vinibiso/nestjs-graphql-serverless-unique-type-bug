import { Injectable } from '@nestjs/common'

@Injectable()
export class SitesService {
  sites = [
    {
      id: "1",
      name: 'test',
      address: {
        number: "1",
        street: "a",
        city: "a",
        state: "a",
        country: "a"
      }
    }
  ]

  findAll() { 
    return this.sites
  }

}
