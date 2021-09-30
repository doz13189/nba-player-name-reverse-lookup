import axios from 'axios'
import { SearchResponse } from '@/domain/models/SearchResponse'


class Search {

  private _searchString: string

  constructor(searchString: string) {
    this._searchString = searchString
  }

  async execute(): Promise<any> {
    try {

      const response = await axios.get<SearchResponse>(`https://www.balldontlie.io/api/v1/players?search=${this._searchString}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log(response.data)

      return response.data

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error')
      }
    }

  }

}

export {
  Search
}
