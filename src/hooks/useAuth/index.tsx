import { auth } from '@src/auth/firebase_auth';
import { SignIn, SignOut } from '@src/core/data/usecases/auth';
import { AuthFirebaseRepository } from '@src/core/infra/repository/firebase/auth';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useCallback, useEffect, useRef, useState } from 'react';

const factory = (repo: AuthFirebaseRepository) => {
  const signIn = new SignIn(repo);
  const signOut = new SignOut(repo);

  return { signIn, signOut };
};

export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    onAuthStateChanged(auth, (userState) => {
      if (userState) {
        setUser(userState);
        return setIsAuth(true);
      }
      return setIsAuth(false);
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

  return { isAuth, user, onSignIn, onSignOut };
}
