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

export {
  TruthyMockedFirestoreService,
  FalsyMockedFirestoreService
}
