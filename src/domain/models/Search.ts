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

      if (!Object.prototype.hasOwnProperty.call(response, 'data')) {
        throw new Error('Error Response')
      }

      return response.data

    }
    catch(error) {
      if (axios.isAxiosError(error)) {
        throw new Error('Error Response')
      }
    }
  }

  // https://stackoverflow.com/questions/54812453/function-lacks-ending-return-statement-and-return-type-does-not-include-undefin?rq=1
  async getPlayer(): Promise<SearchResponseOIF | undefined> {

    const response = await this.fetch(`players?search=${this._searchString}&per_page=100`)
    if (response === undefined) { return }
    if (this.isGetPlayerResponse(response)) { return response }
    return

  }

  // https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#yznotype-guard
  isGetPlayerResponse(checkTarget: any): checkTarget is SearchResponseOIF {
    return (checkTarget.data !== undefined) && (checkTarget.meta !== undefined)
  }

  isError(response: SearchResponseOIF | undefined): boolean {
    if (response === undefined) { return true }
    return false
  }

  isZero(response: SearchResponseOIF): boolean {
    if (response.data.length === 0) { return true }
    return false
  }

  get searchString() {
    return this._searchString
  }

}

export {
  Search
}
