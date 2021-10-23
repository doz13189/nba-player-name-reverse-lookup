import { firebaseApp } from '@/plugins/initializeFirebase'
import { getFirestore } from "firebase/firestore";

export const firestoreProductionConfig = getFirestore(firebaseApp);
export type firestoreType = typeof firestoreProductionConfig