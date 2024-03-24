import { auth } from '@src/auth/firebase_auth';
import { SignIn } from '@src/core/data/usecases/signIn.usecase';
import { SignOut } from '@src/core/data/usecases/signOut.usecase';
import { AuthFirebaseRepository } from '@src/core/infra/repository/firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useCallback, useEffect, useRef, useState } from 'react';

const factory = (repo: AuthFirebaseRepository) => {
  const signIn = new SignIn(repo);
  const signOut = new SignOut(repo);

  return { signIn, signOut };
};

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return setIsAuth(true);
      }
      setIsAuth(false);
    });
  }, []);

  const repo = useRef(new AuthFirebaseRepository()).current;

  const onSignIn = useCallback(
    async (email: string, password: string) => {
      const { signIn } = factory(repo);

      try {
        await signIn.execute(email, password);
      } catch (e) {
        console.log(e);
      }
    },
    [repo]
  );
  const onSignOut = useCallback(async () => {
    const { signOut } = factory(repo);

    try {
      await signOut.execute();
    } catch (e) {
      console.log(e);
    }
  }, [repo]);

  return { isAuth, onSignIn, onSignOut };
}
