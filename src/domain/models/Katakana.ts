import { KatakanaOIF } from '@/interfaces/ObjectInterfaces'
import {
  KatakanaIF,
  FirestoreServiceIF
} from '@/interfaces/ClassInterfaces'


export class Katakana implements KatakanaIF {

  private _playerId: string
  private _isDisplayed = false
  private _firestoreService: FirestoreServiceIF

  constructor(playerId: number, firestoreService: FirestoreServiceIF) {
    this._firestoreService = firestoreService
    this._playerId = String(playerId)
  }

  async getPlayerslDocument (): Promise<KatakanaOIF | undefined> {
    const response = await this._firestoreService.getDocument('players', this._playerId)
    if (response) {
      this._isDisplayed = true
      return response
    }
  }

  get isDisplayed(): boolean {
    return this._isDisplayed
  }

}


