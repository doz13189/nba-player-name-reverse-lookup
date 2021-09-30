interface PlayerIF {
  id: string
  first_name: string
  height_feet: string
  height_inches: string
  last_name: string
  position: string
  team: TeamIF
  weight_pounds: string
}

interface TeamIF {
  id : string
  abbreviation : string
  city : string
  conference : string
  division : string
  full_name : string
  name : string
}

interface MetaIF {
  total_pages : number
  current_page : number
  next_page : number | string
  per_page : number
  total_count : number
}

interface SearchResponseIF {
  data: PlayerIF[]
  meta: MetaIF[]
}

class SearchResponse {

  private _playerList: SearchResponseIF

  constructor(response: SearchResponseIF) {
    this._playerList = response
  }

  

}

export {
  SearchResponse
}
