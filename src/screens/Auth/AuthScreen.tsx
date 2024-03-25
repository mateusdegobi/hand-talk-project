import HandTalkLogoImage from '@assets/handtalk-logo/handtalk-logo.png';
import Button from '@src/components/Button/Button';
import Container from '@src/components/Container/Container';
import TextInputWithLabel from '@src/components/Input/InputWithLabel/InputWithLabel';
import { SignIn } from 'phosphor-react-native';
import React, { useRef } from 'react';
import { Controller } from 'react-hook-form';
import { ActivityIndicator, TextInput } from 'react-native';

import { useSignin } from './hooks';
import { ButtonsArea, HandTalkLogo } from './styles';

export default function AuthScreen() {
  const inputEmailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const focusPassword = () => passwordRef.current?.focus();

  const { loadingSignIn, control, onSubmit } = useSignin();

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

      <ButtonsArea>
        <Button onPress={onSubmit} icon={SignIn}>
          {loadingSignIn ? <ActivityIndicator color="white" /> : 'Entrar'}
        </Button>
      </ButtonsArea>
    </Container>
  );
}
