import { firestoreType } from '@/plugins/firestore'
import {
  doc,
  getDoc,
  // collection,
  // addDoc,
  // setDoc,
  // QueryDocumentSnapshot,
  // DocumentData
} from "firebase/firestore";


interface FirestoreServiceIF {
  getDocument(document: string, key: string): Promise<any>
}

class FirestoreService implements FirestoreServiceIF {

  private _firestore: firestoreType

  constructor(firestore: firestoreType) {
    this._firestore = firestore
  }

  // アプリからの書き込みは実装予定
  // async addDocument(document: string, documentObject: Object) {
  //   try {
  //     await addDoc(collection(this._firestore, document), documentObject)
  //     // console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }


  // アプリからの書き込みは実装予定
  // async setDocument(document: string, documentId: string, collection: Object) {
  //   try {
  //     await setDoc(doc(this._firestore, document, documentId), collection, { merge: true })
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  async getDocument(document: string, key: string): Promise<any> {

    const docRef = doc(this._firestore, document, key);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      return docSnap.data()
    } else {
      // doc.data() will be undefined in this case
      // console.log("No such document!");
      return undefined
    }

  }
  
}


export {
  FirestoreServiceIF,
  FirestoreService
}