import HandTalkLogoImage from '@assets/handtalk-logo/handtalk-logo.png';
import { auth } from '@src/auth/firebase_auth';
import Container from '@src/components/Container/Container';
import TextInputWithLabel from '@src/components/Input/InputWithLabel/InputWithLabel';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput } from 'react-native';

import { HandTalkLogo } from './styles';

export default function AuthScreen() {
  const inputEmailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const focusPassword = () => passwordRef.current?.focus();

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
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log(errors);
      }
    })();
  };

  return (
    <Container>
      <HandTalkLogo source={HandTalkLogoImage} />

      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextInputWithLabel
            ref={inputEmailRef}
            textLabel="Email"
            placeholder="handtalk@mail.com"
            returnKeyType="next"
            onSubmitEditing={focusPassword}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <TextInputWithLabel
            textLabel="Senha"
            ref={passwordRef}
            placeholder="********"
            returnKeyType="go"
            secureTextEntry
            onSubmitEditing={onSubmit}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Button title="Entrar" color="orange" onPress={onSubmit} />
    </Container>
  );
}
