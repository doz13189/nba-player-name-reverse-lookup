import {
  PlayerList
} from '@/domain/models/PlayerList'
import { PlayerOIF } from '@/interfaces/ObjectInterfaces'


const dummyCorrectPlayerList: PlayerOIF[] = [{
  id : 666577,
  first_name : 'Daniel',
  height_feet : null,
  height_inches : null,
  last_name : 'Gafford',
  position : 'F',
  team : {
    id: 30,
    abbreviation : 'WAS',
    city : 'Washington',
    conference : 'East',
    division : 'Southeast',
    full_name : 'Washington Wizards',
    name : 'Wizards'
  },
  weight_pounds : null
}]

const dummyWrongPlayerList: PlayerOIF[] = [{
  id : 0,
  first_name : 'Daniel',
  height_feet : null,
  height_inches : null,
  last_name : 'Gafford',
  position : 'F',
  team : {
    id: 30,
    abbreviation : 'WAS',
    city : 'Washington',
    conference : 'East',
    division : 'Southeast',
    full_name : 'Washington Wizards',
    name : 'Wizards'
  },
  weight_pounds : null
}]

describe('SearchResponse.ts PlayerList Class', () => {

  it('検索結果の選手リスト部分が正しい場合のテスト', async () => {

    const playerlist = new PlayerList(dummyCorrectPlayerList)
    expect(playerlist.isPlayerList()).toBe(true)

  })

  it('検索結果の選手リスト部分が誤っている場合のテスト', async () => {

    const playerlist = new PlayerList(dummyWrongPlayerList)
    expect(playerlist.isPlayerList()).toBe(false)

  })

})





