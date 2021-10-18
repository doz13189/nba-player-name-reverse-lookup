import { Approval } from '@/domain/models/Approval'
import { TruthyMockedFirestoreService, FalsyMockedFirestoreService } from '../mocks/MockedFirestore'


describe('Approval.ts', () => {

  it('承認状況のデータが取得できる場合', async () => {

    const playerId: number = 1
    const firestoreService =  new TruthyMockedFirestoreService()

    const approval = new Approval(playerId, firestoreService)
    await approval.getApprovalDocument()
    expect(approval.isDisplayed).toBe(true)

  })

  it('承認状況のデータが取得できない場合', async () => {

    const playerId: number = 1
    const firestoreService =  new FalsyMockedFirestoreService()

    const approval = new Approval(playerId, firestoreService)
    await approval.getApprovalDocument()
    expect(approval.isDisplayed).toBe(false)

  })

})


