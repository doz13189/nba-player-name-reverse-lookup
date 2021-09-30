import axios from 'axios'

interface Player {
  id: string
  first_name: string
  height_feet: string
  height_inches: string
  last_name: string
  position: string
  team: Team
  weight_pounds: string
}

interface Team {
  id : string
  abbreviation : string
  city : string
  conference : string
  division : string
  full_name : string
  name : string
}

interface Meta {
  total_pages : number
  current_page : number
  next_page : number | string
  per_page : number
  total_count : number
}

interface SearchResponse {
  data: Player[]
  meta: Meta[]
}

class Search {

  private _searchString: string

  constructor(searchString: string) {
    this._searchString = searchString
  }

  async execute() {
    try {

      const response = await axios.get<SearchResponse>(`https://www.balldontlie.io/api/v1/players?search=${this._searchString}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

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
