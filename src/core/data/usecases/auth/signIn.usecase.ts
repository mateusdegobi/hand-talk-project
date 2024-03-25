import { AuthContract } from '../../contracts/auth.contract';

export class SignIn {
  constructor(private readonly repo: AuthContract) {}

  async execute(email: string, password: string) {
    if (!email && email.length < 5) {
      throw new Error('Email is required');
    }

    if (!password) {
      throw new Error('Password is required');
    }

    return this.repo.signIn(email, password);
  }
}
