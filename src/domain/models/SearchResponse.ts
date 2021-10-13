import {
  PlayerOIF
} from '@/domain/models/SearchResponseOIF'


// class SearchResponse {

//   private _meta: Meta
//   private _playerList: PlayerList

//   constructor(response: SearchResponseIF) {
//     this._meta = new Meta(response.meta)
//     this._playerList = new PlayerList(response.data)
//   }

//   get meta(): Meta {
//     return this._meta
//   }

//   get playerList(): PlayerList {
//     return this._playerList
//   }

// }

// class Meta {

//   private _meta: MetaIF

//   constructor(response: MetaIF) {
//     this._meta = response
//   }

//   get meta(): MetaIF {
//     return this._meta
//   }

// }

class PlayerList {

  private _playerList: PlayerOIF[]

  constructor(response: PlayerOIF[]) {
    this._playerList = response
  }

  isPlayerList(): boolean {
    return this._playerList[0].id !== 0
  }

  get playerList(): PlayerOIF[] {
    return this._playerList
  }

}



export {
  PlayerList
}
