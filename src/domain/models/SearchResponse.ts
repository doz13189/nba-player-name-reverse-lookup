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


class SearchResponse {

  private _meta: Meta
  private _playerList: PlayerList

  constructor(response: SearchResponseIF) {
    this._meta = new Meta(response.meta)
    this._playerList = new PlayerList(response.data)
  }

  get meta(): Meta {
    return this._meta
  }

  get playerList(): PlayerList {
    return this._playerList
  }

}

class Meta {

  private _meta: MetaIF

  constructor(response: MetaIF) {
    this._meta = response
  }

  get meta(): MetaIF {
    return this._meta
  }

}

class PlayerList {

  private _playerList: PlayerIF[]

  constructor(response: PlayerIF[]) {
    this._playerList = response
  }

  playerListLength(): number {
    return this._playerList.length
  }

  get playerList(): PlayerIF[] {
    return this._playerList
  }

}



export {
  SearchResponse,
  Meta,
  PlayerList,
  SearchResponseIF,
  MetaIF,
  TeamIF,
  PlayerIF
}
