import { auth } from '@src/auth/firebase_auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function useSignin() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    await handleSubmit(async ({ email, password }) => {
      try {
        setIsLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        setIsLoading(false);
      } catch (error) {
        console.log(errors);
        setIsLoading(false);
      }
    })();
  };

  return { loadingSignIn: isLoading, control, onSubmit };
}
