import { GeometricObjectUserData, UserConfigObjectContract } from '../../contracts';

export class SetUserObjectsConfig {
  constructor(private readonly repo: UserConfigObjectContract) {}

  async execute(userKey: string, config: GeometricObjectUserData) {
    await this.repo.setConfig(userKey, config);
  }
}
