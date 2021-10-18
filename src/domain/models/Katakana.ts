import { FirestoreServiceIF } from '@/domain/repository/firestore'


interface KatakanaOIF {
  first_name: string
  last_name:string
}

class Katakana {

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

export {
  KatakanaOIF,
  Katakana
}