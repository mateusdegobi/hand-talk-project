import HandTalkLogoImage from '@assets/handtalk-logo/handtalk-logo.png';
import Container from '@src/components/Container/Container';
import TextInputWithLabel from '@src/components/Input/InputWithLabel/InputWithLabel';
import React, { useCallback, useRef } from 'react';
import { Button, TextInput } from 'react-native';

import { HandTalkLogo } from './styles';

export default function AuthScreen() {
  const inputEmailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const focusPassword = () => passwordRef.current?.focus();

  const onSubmit = useCallback(() => {}, []);

  return (
    <Container>
      <HandTalkLogo source={HandTalkLogoImage} />

      <TextInputWithLabel
        textLabel="Email"
        ref={inputEmailRef}
        placeholder="handtalk@mail.com"
        returnKeyType="next"
        onSubmitEditing={focusPassword}
      />
      <TextInputWithLabel
        textLabel="Senha"
        ref={passwordRef}
        placeholder="********"
        returnKeyType="go"
        secureTextEntry
        onSubmitEditing={onSubmit}
      />

      <Button title="Entrar" color="orange" onPress={onSubmit} />
    </Container>
  );
}
