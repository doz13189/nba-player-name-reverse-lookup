// import {
//   PlayerOIF,
//   TeamOIF,
//   MetaOIF,
//   SearchResponseOIF
// } from '@/domain/models/SearchResponseOIF'


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

// class PlayerList {

//   private _playerList: PlayerIF[]

//   constructor(response: PlayerIF[]) {
//     this._playerList = response
//   }

//   playerListLength(): number {
//     return this._playerList.length
//   }

//   get playerList(): PlayerIF[] {
//     return this._playerList
//   }

// }



// export {
//   SearchResponse,
//   Meta,
//   PlayerList,
//   SearchResponseIF,
//   MetaIF,
//   TeamIF,
//   PlayerIF
// }
