import dataRemoteJson from '@constants/database/remote_config.json';
import { GeometricObjectUserData, ObjectsContract } from '@src/core/data/contracts/';
import { GeometricObject, ObjectsType, ShapeType } from '@src/core/domain/entities/GeometricObject';

export class ObjectsRepository implements ObjectsContract {
  private objects: ObjectsType;

  constructor() {
    const dataRemote = dataRemoteJson;

    this.objects = {
      object1: new GeometricObject({
        shape: dataRemote.object1.shape as ShapeType,
        color: dataRemote.object1.color,
        position: [0, +1.5, 0],
        rotation: dataRemote.object1.rotation,
      }),
      object2: new GeometricObject({
        shape: dataRemote.object2.shape as ShapeType,
        color: dataRemote.object2.color,
        position: [0, 0, 0],
        rotation: dataRemote.object2.rotation,
      }),
      object3: new GeometricObject({
        shape: dataRemote.object3.shape as ShapeType,
        color: dataRemote.object3.color,
        position: [0, -1.5, 0],
        rotation: dataRemote.object3.rotation,
      }),
    };
  }

  getObjects(): ObjectsType {
    return this.objects;
  }

  editObject(keyObject: string, data: Partial<GeometricObject>) {
    this.objects[keyObject] = {
      ...this.objects[keyObject],
      ...data,
    };
  }

  editAllObjects(newObjects: GeometricObjectUserData) {
    this.objects = {
      ...this.objects,
      ...newObjects,
    };
  }
}
