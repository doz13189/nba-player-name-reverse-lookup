interface PlayerIF {
  id: number
  first_name: string
  height_feet: number | null
  height_inches: number | null
  last_name: string
  position: string
  team: TeamIF
  weight_pounds: number | null
}

interface TeamIF {
  id : number
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
  next_page : number | null
  per_page : number
  total_count : number
}

interface SearchResponseIF {
  data: PlayerIF[]
  meta: MetaIF
}

class SearchResponseService {

  // https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#yznotype-guard
  static isSearchResponse(checkTarget: any): checkTarget is SearchResponseIF {
    return (checkTarget.data !== undefined) && (checkTarget.meta !== undefined)
  }

}

class SearchResponse {

  private _playerList: PlayerIF[]
  private _meta: MetaIF

  constructor(response: SearchResponseIF) {
    this._playerList = response.data
    this._meta = response.meta
  }

  playerListLength(): number {
    return this._playerList.length
  }

  get meta(): MetaIF {
    return this._meta
  }

  get playerList(): PlayerIF[] {
    return this._playerList
  }

}

export {
  SearchResponse,
  SearchResponseService,
  SearchResponseIF,
  MetaIF,
  TeamIF,
  PlayerIF
}