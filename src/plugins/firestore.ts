import { firebaseApp } from '@/plugins/initializeFirebase'
import { getFirestore } from "firebase/firestore";

const firestoreProductionConfig = getFirestore(firebaseApp);
type firestoreType = typeof firestoreProductionConfig

export {
  firestoreProductionConfig,
  firestoreType
}
