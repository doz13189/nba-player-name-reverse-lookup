import axios from 'axios'
import { SearchResponse, SearchResponseService } from '@/domain/models/SearchResponse'


class Search {

  private _searchString: string

  constructor(searchString: string) {
    this._searchString = searchString
  }


  async fetch(): Promise<any> {
    try {
      const response = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${this._searchString}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response) {
        throw new Error('Error Response')
      }

      return response.data

    }
    catch(error) {
      if (axios.isAxiosError(error)) {
        console.error(error)
      }
    }
  }

  // https://stackoverflow.com/questions/54812453/function-lacks-ending-return-statement-and-return-type-does-not-include-undefin?rq=1
  async getPlayer(): Promise<SearchResponse | undefined> {
    try {

      const response = await this.fetch()

      if (SearchResponseService.isSearchResponse(response)) {
        return new SearchResponse(response)
      }

    } catch (error) {
      console.error(error)
    }
  }
}

export {
  Search
}
