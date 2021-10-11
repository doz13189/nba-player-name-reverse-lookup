import axios from 'axios'
import { SearchResponse, SearchResponseIF } from '@/domain/models/SearchResponse'


class Search {

  private _searchString: string

  constructor(searchString: string) {
    this._searchString = searchString
  }


  async fetch(): Promise<any> {
    try {
      console.log('Search')
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

      if (this.isGetPlayerResponse(response)) {
        return new SearchResponse(response)
      }

    } catch (error) {
      console.error(error)
    }
  }

  // https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#yznotype-guard
  isGetPlayerResponse(checkTarget: any): checkTarget is SearchResponseIF {
    return (checkTarget.data !== undefined) && (checkTarget.meta !== undefined)
  }

  get searchString() {
    return this._searchString
  }
  
}

export {
  Search
}
