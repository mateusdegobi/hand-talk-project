import { GeometricObject, ObjectsType } from '@src/core/domain/entities/GeometricObject';

import { GeometricObjectUserData } from './user-objects-config.contract';

export interface ObjectsContract {
  getObjects(): ObjectsType;
  editObject(keyObject: string, data: Partial<GeometricObject>): void;
  editAllObjects(newObjects: GeometricObjectUserData): void;
}
