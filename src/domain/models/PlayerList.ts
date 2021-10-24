import { PlayerOIF} from '@/interfaces/ObjectInterfaces'
import { PlayerListIF } from '@/interfaces/ClassInterfaces'


export class PlayerList implements PlayerListIF {

  private _playerList: PlayerOIF[]

  constructor(response: PlayerOIF[]) {
    this._playerList = response
  }

  isPlayerList(): boolean {
    // PlayerList Class の _playerList に undefined が渡されることはロジック上ないため、この関数は常に true を返す
    // return this._playerList !==  undefined
    return this._playerList !== undefined
  }

  get playerList(): PlayerOIF[] {
    return this._playerList
  }

}

