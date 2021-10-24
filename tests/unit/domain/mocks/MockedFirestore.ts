import { FirestoreServiceIF } from '@/interfaces/ClassInterfaces'


export class TruthyMockedFirestoreService implements FirestoreServiceIF {

  async getDocument(document: string, key: string): Promise<any> {
    return Promise.resolve('dummy')
  }

}

export class FalsyMockedFirestoreService implements FirestoreServiceIF {

  async getDocument(document: string, key: string): Promise<any> {
    return Promise.resolve(undefined)
  }

}

