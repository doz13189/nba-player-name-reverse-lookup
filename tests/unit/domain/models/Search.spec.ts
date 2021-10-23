import { Search } from '@/domain/models/Search'
import { SearchResponseOIF } from '@/interfaces/ObjectInterfaces'

import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

const dummyCorrectResponse: SearchResponseOIF = { data : [{
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

const dummyCorrectZeroResponse: SearchResponseOIF = { data : [],
  meta : { 'total_pages' : 1, 'current_page' : 1, 'next_page' : null, 'per_page' : 25, 'total_count' : 1 }
}


const dummyWrangtResponse: SearchResponseOIF | any = { data : [{
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
  }]
}


describe('Search.ts', () => {
  
  it('検索結果が1件の場合の検索テスト', async () => {

    mockedAxios.get.mockResolvedValue({ data: dummyCorrectResponse })

    const playerName: string = 'gafford'
    const search = new Search(playerName)
    const searchResponse = await search.getPlayer()

    if (searchResponse) {
      expect(searchResponse).toEqual(dummyCorrectResponse)
    }

  })

  it('検索結果が0件の場合の検索テスト', async () => {

    mockedAxios.get.mockResolvedValue({ data: dummyCorrectZeroResponse })

    const playerName: string = 'gafford'
    const search = new Search(playerName)
    const searchResponse = await search.getPlayer()

    if (searchResponse) {
      expect(searchResponse).toEqual(dummyCorrectZeroResponse)
      expect(search.isZero(searchResponse)).toBe(true)
    }

  })

  it('不正な型のレスポンスが返ってくる場合の検索テスト', async () => {

    mockedAxios.get.mockResolvedValue({ data: dummyWrangtResponse })

    const playerName: string = 'gafford'
    const search = new Search(playerName)

    const searchResponse = await search.getPlayer()
    expect(searchResponse).toBe(undefined)
    expect(search.isError(searchResponse)).toBe(true)

  })

  it('空のレスポンスが返ってくる場合の検索テスト', async () => {

    mockedAxios.get.mockResolvedValue({})

    const playerName: string = 'gafford'
    const search = new Search(playerName)

    const searchResponse = await search.getPlayer()
    expect(searchResponse).toBe(undefined)

  })

  it('エラーレスポンスが返ってくる場合の検索テスト', async () => {

    mockedAxios.get.mockRejectedValue({})

    const playerName: string = 'gafford'
    const search = new Search(playerName)

    const searchResponse = await search.getPlayer()
    expect(searchResponse).toBe(undefined)

  })

})
