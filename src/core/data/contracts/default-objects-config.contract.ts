import { GeometricObject } from '@src/core/domain/entities/GeometricObject';

export interface DefaultObjectsConfigContract {
  getConfig(): Promise<Omit<GeometricObject, 'position'>>;
}
