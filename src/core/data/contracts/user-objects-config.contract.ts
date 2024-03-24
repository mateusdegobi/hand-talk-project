import { GeometricObject } from '@src/core/domain/entities/GeometricObject';

export type GeometricObjectUserData = Omit<GeometricObject, 'position'>;

export interface UserConfigObjectContract {
  getConfig(userKey: string): Promise<GeometricObjectUserData | undefined>;
  setConfig(userKey: string, config: GeometricObjectUserData): Promise<void>;
}
