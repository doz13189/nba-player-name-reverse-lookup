import { PlayerOIF} from '@/interfaces/ObjectInterfaces'
import { PlayerListIF } from '@/interfaces/ClassInterfaces'


export class PlayerList implements PlayerListIF {

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

