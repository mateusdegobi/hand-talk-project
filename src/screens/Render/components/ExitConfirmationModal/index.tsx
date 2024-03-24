import Button from '@src/components/Button/Button';
import { modalPopUpControllers } from '@src/components/ModalPopUp/ModalPopUp';
import { useAuth } from '@src/hooks/';
import React from 'react';

import { Container } from './styles';

export default function ExitConfirmationModal() {
  const { onSignOut } = useAuth();

  const { hide } = modalPopUpControllers;

  const handleSignOut = async () => {
    await onSignOut();
    hide();
  };

  return (
    <Container>
      <Button type="primary" onPress={hide}>
        Não, continuar
      </Button>
      <Button type="tertiary" color="red" onPress={handleSignOut} style={{ marginTop: 12 }}>
        Sair
      </Button>
    </Container>
  );
}
