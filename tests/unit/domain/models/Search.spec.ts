import { Search } from '@/domain/models/Search'
import { SearchResponseOIF } from '@/domain/models/SearchResponseOIF'

import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

const dummyResponse1: SearchResponseOIF = { data : [{
    id : 666577,
    first_name : 'Daniel',
    height_feet : null,
    height_inches : null,
    last_name : 'Gafford',
    position : 'F',
    team : {
      id: 30,
      abbreviation : 'WAS',
      city : 'Washington',
      conference : 'East',
      division : 'Southeast',
      full_name : 'Washington Wizards',
      name : 'Wizards'
    },
    weight_pounds : null
  }],
  meta : { 'total_pages' : 1, 'current_page' : 1, 'next_page' : null, 'per_page' : 25, 'total_count' : 1 }
}

const dummyResponse2: SearchResponseOIF =  { data:
  [{
      id: 386,
      first_name: "Chasson",
      height_feet: 6,
      height_inches: 2,
      last_name: "Randle",
      position: "G",
      team: {
        id: 22,
        abbreviation: "ORL",
        city: "Orlando",
        conference: "East",
        division: "Southeast",
        full_name: "Orlando Magic",
        name: "Magic"
      },
      weight_pounds: 185
    },
    {
      id: 387,
    first_name: "Julius",
    height_feet: 6,
    height_inches: 9,
    last_name: "Randle",
    position: "F",
    team: {
      id: 20,
      abbreviation: "NYK",
      city: "New York",
      conference: "East",
      division: "Atlantic",
      full_name: "New York Knicks",
      name: "Knicks"
    },
    weight_pounds: 250
  }],
  meta: {
    total_pages: 1,
    current_page: 1,
    next_page: null,
    per_page: 25,
    total_count: 2
  }
}

describe('Search.ts', () => {
  
  it('検索結果が1件の検索テスト', async () => {

    mockedAxios.get.mockResolvedValue({ data: dummyResponse1 })

    const playerName: string = 'gafford'
    const search = new Search(playerName)
    const searchResponse = await search.getPlayer()

    if (searchResponse) {
      expect(searchResponse).toEqual(dummyResponse1)
    }

  })

  it('検索結果が複数の検索テスト', async () => {

    mockedAxios.get.mockResolvedValue({ data: dummyResponse2 })

    const playerName: string = 'randle'
    const search = new Search(playerName)

    const searchResponse = await search.getPlayer()
    if (searchResponse) {
      expect(searchResponse.meta).toEqual(dummyResponse2)
    }

  })

})
