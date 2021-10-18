import { Katakana } from '@/domain/models/Katakana'
import { FirestoreServiceIF } from '@/domain/repository/firestore'


class TruthyMockedFirestoreService implements FirestoreServiceIF {

  async getDocument(document: string, key: string): Promise<any> {
    return Promise.resolve('dummy')
  }

}

class FalsyMockedFirestoreService implements FirestoreServiceIF {

  async getDocument(document: string, key: string): Promise<any> {
    return Promise.resolve(undefined)
  }

}

describe('Katakana.ts', () => {

  it('カタカナ表記のデータが取得できる場合', async () => {

    const playerId: number = 1
    const firestoreService =  new TruthyMockedFirestoreService()

    const katakana = new Katakana(playerId, firestoreService)
    await katakana.getPlayerslDocument()
    expect(katakana.isDisplayed).toBe(true)

  })

  it('カタカナ表記のデータが取得できない場合', async () => {

    const playerId: number = 1
    const firestoreService =  new FalsyMockedFirestoreService()

    const katakana = new Katakana(playerId, firestoreService)
    await katakana.getPlayerslDocument()
    expect(katakana.isDisplayed).toBe(false)

  })

})


