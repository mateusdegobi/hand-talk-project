import { ObjectsRepository } from '@src/core/infra/repository/objects';

export class GetObjects {
  constructor(private repo: ObjectsRepository) {}

  async execute(): Promise<any> {
    return this.repo.getObjects();
  }
}
