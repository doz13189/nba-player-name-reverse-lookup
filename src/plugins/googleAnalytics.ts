import { firebaseApp } from '@/plugins/initializeFirebase'
import { getAnalytics } from "firebase/analytics";

getAnalytics(firebaseApp);

