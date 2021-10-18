import { Katakana } from '@/domain/models/Katakana'
import { TruthyMockedFirestoreService, FalsyMockedFirestoreService } from '../mocks/MockedFirestore'


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


