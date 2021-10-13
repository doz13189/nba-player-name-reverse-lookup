import axios from 'axios'
import { SearchResponseOIF } from '@/domain/models/SearchResponseOIF'


class Search {

  private _searchString: string
  private _baseURL = 'https://www.balldontlie.io/api/v1/'

  constructor(searchString: string) {
    this._searchString = searchString
  }

  async fetch(args: string): Promise<any> {
    try {
      const response = await axios.get(`${this._baseURL}${args}`, {
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
  async getPlayer(): Promise<SearchResponseOIF | undefined> {

    try {

      const response = await this.fetch(`players?search=${this._searchString}`)

      if (this.isGetPlayerResponse(response)) {
        return response
      }

    } catch (error) {
      console.error(error)
    }
  }

  // https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#yznotype-guard
  isGetPlayerResponse(checkTarget: any): checkTarget is SearchResponseOIF {
    return (checkTarget.data !== undefined) && (checkTarget.meta !== undefined)
  }

  get searchString() {
    return this._searchString
  }

}

export {
  Search
}
