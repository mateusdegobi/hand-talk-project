import { ObjectsType } from '@src/core/domain/entities/GeometricObject';

import { UserConfigObjectContract } from '../../contracts';

export class SetUserObjectsConfig {
  constructor(private readonly repo: UserConfigObjectContract) {}

  async execute(userKey: string, config: ObjectsType) {
    await this.repo.setConfig(userKey, config);
  }
}
