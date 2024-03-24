import { UserConfigObjectContract } from '../../contracts';

export class GetUserObjectsConfig {
  constructor(private readonly repo: UserConfigObjectContract) {}

  async execute(userKey: string) {
    return this.repo.getConfig(userKey);
  }
}
