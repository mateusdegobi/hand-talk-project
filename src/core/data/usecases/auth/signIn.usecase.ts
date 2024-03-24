import { AuthContract } from '../../contracts/auth.contract';

export class SignIn {
  constructor(private readonly repo: AuthContract) {}

  async execute(email: string, password: string) {
    return this.repo.signIn(email, password);
  }
}
