import axios, { AxiosPromise } from 'axios'
import { SearchResponse } from '@/domain/models/SearchResponse'


class Search {

  private _searchString: string

  constructor(searchString: string) {
    this._searchString = searchString
  }

  // execute の return について後でちゃんと読む
  // https://stackoverflow.com/questions/54812453/function-lacks-ending-return-statement-and-return-type-does-not-include-undefin?rq=1
  async execute(): Promise<SearchResponse | undefined> {
    try {

      const response = await axios.get<SearchResponse>(`https://www.balldontlie.io/api/v1/players?search=${this._searchString}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const searchResponse = new SearchResponse(response.data)
      if (searchResponse === undefined) { throw new Error('aa') }

      return searchResponse

    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error('aa')
      }
    }

  }

}

export {
  Search
}
