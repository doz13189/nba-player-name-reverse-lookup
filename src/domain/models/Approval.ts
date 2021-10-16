import { FirestoreService } from '@/domain/repository/firestore'


interface ApprovalOIF {
  status: boolean
}

class Approval {

  private _playerId: string
  private _firestoreService: FirestoreService

  constructor(playerId: number, firestoreService: FirestoreService) {
    this._firestoreService = firestoreService
    this._playerId = String(playerId)
  }

  async getApprovalDocument (): Promise<ApprovalOIF | undefined> {
    const response = await this._firestoreService.getDocument('approval', this._playerId)
    if (response) {
      return response
    }
  }

}

export {
  ApprovalOIF,
  Approval
}
