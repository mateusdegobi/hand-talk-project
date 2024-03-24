import { auth } from '@src/auth/firebase_auth';
import { AuthContract } from '@src/core/data/contracts/auth.contract';
import { signInWithEmailAndPassword, signOut as signOutFB } from 'firebase/auth';

export class AuthFirebaseRepository implements AuthContract {
  async signIn(email: string, password: string): Promise<any> {
    await signInWithEmailAndPassword(auth, email, password);
  }
  async signOut(): Promise<any> {
    await signOutFB(auth);
  }
}
