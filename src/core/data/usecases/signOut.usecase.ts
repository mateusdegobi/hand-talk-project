import { AuthContract } from '../contracts/auth.contract';

export class SignOut {
  constructor(private readonly repo: AuthContract) {}

  async execute() {
    return this.repo.signOut();
  }
}
