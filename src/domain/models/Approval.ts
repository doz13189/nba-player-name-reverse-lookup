import { FirestoreServiceIF } from '@/domain/repository/firestore'


interface ApprovalOIF {
  status: boolean
}

class Approval {

  private _playerId: string
  private _isDisplayed = false
  private _firestoreService: FirestoreServiceIF

  constructor(playerId: number, firestoreService: FirestoreServiceIF) {
    this._firestoreService = firestoreService
    this._playerId = String(playerId)
  }

  async getApprovalDocument (): Promise<ApprovalOIF | undefined> {
    const response = await this._firestoreService.getDocument('approval', this._playerId)
    if (response) {
      this._isDisplayed = true
      return response
    }
  }

  get isDisplayed(): boolean {
    return this._isDisplayed
  }

}

export {
  ApprovalOIF,
  Approval
}
