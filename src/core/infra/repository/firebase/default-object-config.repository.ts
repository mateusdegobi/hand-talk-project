import { app } from '@src/auth/firebase_auth';
import { DefaultObjectsConfigContract } from '@src/core/data/contracts';
import { getRemoteConfig, fetchAndActivate, getValue, Value } from 'firebase/remote-config';

export class DefaultObjectsConfigRepository implements DefaultObjectsConfigContract {
  async getConfig(): Promise<Value> {
    const remote = getRemoteConfig(app);
    await fetchAndActivate(remote);

    const value = getValue(remote, 'objects');

    return value;
  }
}
