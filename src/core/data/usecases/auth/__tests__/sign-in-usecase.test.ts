import { describe, it, expect, beforeEach } from '@jest/globals';

import { AuthContract } from '../../../contracts/auth.contract';
import { SignIn } from '../signIn.usecase';

describe('SignIn', () => {
  let authContractMock: jest.Mocked<AuthContract>;

  beforeEach(() => {
    authContractMock = {
      signIn: jest.fn(),
    };
  });

  it('should throw an error if email is not provided', async () => {
    const signIn = new SignIn(authContractMock);

    await expect(signIn.execute('', 'password')).rejects.toThrow('Email is required');
  });

  it('should throw an error if password is not provided', async () => {
    const signIn = new SignIn(authContractMock);

    await expect(signIn.execute('test@test.com', '')).rejects.toThrow('Password is required');
  });

  it('should call signIn on the repository with the correct parameters', async () => {
    const signIn = new SignIn(authContractMock);

    await signIn.execute('test@test.com', 'password');

    expect(authContractMock.signIn).toHaveBeenCalledWith('test@test.com', 'password');
  });
});
