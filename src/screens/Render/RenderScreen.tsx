import { useNavigation } from '@react-navigation/native';
import Button from '@src/components/Button/Button';
import Container from '@src/components/Container/Container';
import { Box, Cone, Dodecahedron } from '@src/components/GeometricFigures';
import { modalPopUpControllers } from '@src/components/ModalPopUp/ModalPopUp';
import React, { useCallback } from 'react';

import ExitConfirmationModal from './components/ExitConfirmationModal';
import { CanvasView, Header } from './styles';

export default function RenderScreen() {
  const { navigate } = useNavigation();

  const goToSettings = () => {
    navigate('Settings');
  };

  const handleExit = useCallback(() => {
    modalPopUpControllers.show({
      component: <ExitConfirmationModal />,
      title: 'Deseja realmente sair?',
    });
  }, []);

  return (
    <Container style={{ backgroundColor: 'black' }}>
      <Header>
        <Button type="tertiary" onPress={handleExit}>
          Sair
        </Button>
      </Header>

      <CanvasView>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />

        <Box color="red" position={[0, +1.5, 0]} />
        <Cone color="yellow" position={[0, 0, 0]} />
        <Dodecahedron color="green" position={[0, -1.5, 0]} />
      </CanvasView>

      <Button type="primary" onPress={goToSettings}>
        Configurações
      </Button>
    </Container>
  );
}
