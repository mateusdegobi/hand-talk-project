/* eslint-disable no-unused-vars */
export interface AuthContract {
  signIn(email: string, password: string): Promise<any>;
  signOut(): Promise<any>;
}
