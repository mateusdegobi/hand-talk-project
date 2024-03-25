import { database } from '@src/auth/firebase_auth';
import { USER_FIREBASE_KEYS } from '@src/constants/keys/user-firebase-keys';
import { GeometricObjectUserData, UserConfigObjectContract } from '@src/core/data/contracts/';
import { ObjectsType } from '@src/core/domain/entities/GeometricObject';
import { ref, get, update, child } from 'firebase/database';

export class UserObjectsConfigRepository implements UserConfigObjectContract {
  async getConfig(userKey: string): Promise<GeometricObjectUserData | undefined> {
    const userObjectConfigRef = ref(database, USER_FIREBASE_KEYS.USER_OBJECT_CONFIG);
    const snapshot = await get(child(userObjectConfigRef, userKey));

    if (!snapshot.exists()) {
      throw new Error('User object config not found');
    }

    const data: GeometricObjectUserData = snapshot.val();
    return data;
  }
  async setConfig(userKey: string, config: ObjectsType): Promise<void> {
    const userObjectConfigRef = ref(database, USER_FIREBASE_KEYS.USER_OBJECT_CONFIG);
    await update(child(userObjectConfigRef, userKey), config);
  }
}
