import { GeometricObjectUserData } from '../../contracts';
import { ObjectsContract } from '../../contracts/objects.contract';

export class EditAllObjects {
  constructor(private readonly repo: ObjectsContract) {}

  async execute(objects: GeometricObjectUserData) {
    this.repo.editAllObjects(objects);
  }
}
