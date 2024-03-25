import { describe, it, expect, beforeEach } from '@jest/globals';

import { AuthContract } from '../../../contracts/auth.contract';
import { SignOut } from '../signOut.usecase';

describe('SignOut', () => {
  let authContractMock: jest.Mocked<AuthContract>;

  beforeEach(() => {
    authContractMock = {
      signOut: jest.fn(),
    };
  });

  it('should call signOut on the repository', async () => {
    const signOut = new SignOut(authContractMock);

    await signOut.execute();

    expect(authContractMock.signOut).toHaveBeenCalled();
  });
});
