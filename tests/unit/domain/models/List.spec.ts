import { Search } from '@/domain/models/Search'
import {
  SearchResponse,
  SearchResponseIF,
} from '@/domain/models/SearchResponse'

import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

const response: SearchResponseIF =  { data:
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

describe('List.ts', () => {
  
  it('検索結果を表示するテスト', async () => {

    mockedAxios.get.mockResolvedValue({ data: response1 })

    const playerName: string = 'gafford'
    const search = new Search(playerName)
    const searchResponse = await search.getPlayer()

    if (searchResponse) {
      expect(searchResponse.meta).toEqual(new SearchResponse(response1).meta)
      expect(searchResponse.playerList).toEqual(new SearchResponse(response1).playerList)
      expect(searchResponse.playerListLength()).toBe(1)
    }

  })

})
