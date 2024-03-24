import { GeometricObject, ObjectsType } from '@src/core/domain/entities/GeometricObject';

export interface ObjectsContract {
  getObjects(): Promise<ObjectsType>;
  editObject(keyObject: string, data: Partial<GeometricObject>): Promise<any>;
}
