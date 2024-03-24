import { ObjectsContract } from '@src/core/data/contracts/objets.contract';
import { GeometricObject, ObjectsType } from '@src/core/domain/entities/GeometricObject';

export class ObjectsRepository implements ObjectsContract {
  private objects: ObjectsType;

  constructor() {
    this.objects = {
      object1: new GeometricObject({
        shape: 'cube',
        color: 'red',
        position: [0, +1.5, 0],
        rotation: 0,
      }),
      object2: new GeometricObject({
        shape: 'cone',
        color: 'green',
        position: [0, 0, 0],
        rotation: 0,
      }),
      object3: new GeometricObject({
        shape: 'dodecahedron',
        color: 'yellow',
        position: [0, -1.5, 0],
        rotation: 0,
      }),
    };
  }

  async getObjects(): Promise<ObjectsType> {
    return this.objects;
  }

  async editObject(keyObject: string, data: Partial<GeometricObject>): Promise<any> {
    this.objects[keyObject] = {
      ...this.objects[keyObject],
      ...data,
    };
  }
}
