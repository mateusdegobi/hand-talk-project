export interface AuthContract {
  signIn(email: string, password: string): Promise<any>;
  signOut(): Promise<any>;
}
