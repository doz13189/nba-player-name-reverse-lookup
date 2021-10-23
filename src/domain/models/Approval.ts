import { ApprovalOIF } from '@/interfaces/ObjectInterfaces'
import {
  ApprovalIF,
  FirestoreServiceIF
} from '@/interfaces/ClassInterfaces'

export class Approval implements ApprovalIF {

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

