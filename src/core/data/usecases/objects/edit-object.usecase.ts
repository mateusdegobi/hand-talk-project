import { GeometricObject } from '@src/core/domain/entities/GeometricObject';

import { ObjectsContract } from '../../contracts/objets.contract';

export class EditObject {
  constructor(private readonly repo: ObjectsContract) {}

  async execute(keyObject: string, objectValue: Partial<GeometricObject>) {
    await this.repo.editObject(keyObject, objectValue);
  }
}
