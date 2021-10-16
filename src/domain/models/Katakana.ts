import { FirestoreService } from '@/domain/repository/firestore'


interface KatakanaOIF {
  first_name: string
  last_name:string
}

class Katakana {

  private _playerId: string
  private _firestoreService: FirestoreService

  constructor(playerId: number, firestoreService: FirestoreService) {
    this._firestoreService = firestoreService
    this._playerId = String(playerId)
  }

  async getPlayerslDocument (): Promise<KatakanaOIF | undefined> {
    const response = await this._firestoreService.getDocument('players', this._playerId)
    if (response) {
      return response
    }
  }

}

export {
  KatakanaOIF,
  Katakana
}