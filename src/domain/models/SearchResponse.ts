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
  meta: MetaIF
}

class SearchResponse {

  private _playerList: SearchResponseIF

  constructor(response: object) {

    if (this.isSearchResponse(response)) {
      this._playerList = response
    }
    
    throw new Error('Error !!')
    
  }

  // https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#yznotype-guard
  isSearchResponse(checkTarget: any): checkTarget is SearchResponseIF {

    // this._playerList.data の詳細のチェックは省略 (data が undefined でなければ、player のデータはだいたいあるため)
    return (checkTarget.data !== undefined)
    && (checkTarget.meta !== undefined)
    && (checkTarget.meta.current_page !== undefined)
    && (checkTarget.meta.total_pages !== undefined)
    && (checkTarget.meta.current_page !== undefined)
    && (checkTarget.meta.next_page !== undefined)
    && (checkTarget.meta.per_page !== undefined)
    && (checkTarget.meta.total_count !== undefined)

  }

}

export {
  SearchResponse
}
