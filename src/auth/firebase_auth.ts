import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import firebaseConfig from '@src/constants/database/firebase';
import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { initializeAuth, getAuth, Auth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

let app: FirebaseApp;
let auth: Auth;

const hasInitializedApps = getApps().length;

if (!hasInitializedApps) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  } catch (error) {
    app = getApp();
    auth = getAuth(app);
  }
} else {
  app = getApp();
  auth = getAuth(app);
}

const database = getDatabase(app);

export { app, auth, database };
