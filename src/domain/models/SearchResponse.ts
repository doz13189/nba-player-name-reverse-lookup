import {
  MetaOIF,
  PlayerOIF
} from '@/domain/models/SearchResponseOIF'


class Meta {

  private _meta: MetaOIF

  constructor(response: MetaOIF) {
    this._meta = response
  }

  isMeta(): boolean {
    return this._meta.current_page !== 0
  }

  isOver100(): boolean {
    return this._meta.total_pages > 1
  }

  get meta(): MetaOIF {
    return this._meta
  }

}

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
  Meta,
  PlayerList
}
