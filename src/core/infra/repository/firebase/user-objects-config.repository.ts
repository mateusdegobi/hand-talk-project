import { database } from '@src/auth/firebase_auth';
import { GeometricObjectUserData, UserConfigObjectContract } from '@src/core/data/contracts/';
import { ref, get, set, child } from 'firebase/database';

export class UserObjectsConfigRepository implements UserConfigObjectContract {
  async getConfig(userKey: string): Promise<GeometricObjectUserData | undefined> {
    const userObjectConfigRef = ref(database, 'user-object-config');
    const snapshot = await get(child(userObjectConfigRef, userKey));

    if (!snapshot.exists()) {
      throw new Error('User object config not found');
    }

    const data: GeometricObjectUserData = snapshot.val();
    return data;
  }
  async setConfig(userKey: string, config: GeometricObjectUserData): Promise<void> {
    const userObjectConfigRef = ref(database, 'user-object-config');
    await set(child(userObjectConfigRef, userKey), config);
  }
}
