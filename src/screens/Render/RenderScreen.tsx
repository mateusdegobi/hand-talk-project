import { useNavigation } from '@react-navigation/native';
import Button from '@src/components/Button/Button';
import Container from '@src/components/Container/Container';
import { Box, Cone, Dodecahedron } from '@src/components/GeometricFigures';
import { modalPopUpControllers } from '@src/components/ModalPopUp/ModalPopUp';
import { useObjectsContext } from '@src/contexts/ObjectsContext';
import React, { useCallback } from 'react';

import EditObjectModal from './components/EditObjectModal';
import ExitConfirmationModal from './components/ExitConfirmationModal';
import { CanvasView, Header } from './styles';

export default function RenderScreen() {
  const { navigate } = useNavigation();
  const { objects } = useObjectsContext();

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

        {Object.entries(objects || {}).map(([key, value]) => {
          const openModal = () => {
            modalPopUpControllers.show({
              component: <EditObjectModal object={key} objectValue={value} />,
              title: 'Editando objeto',
            });
          };

          if (value.shape === 'cube')
            return <Box color={value.color} position={value.position} onClick={openModal} />;

          if (value.shape === 'cone')
            return <Cone color={value.color} position={value.position} onClick={openModal} />;

          if (value.shape === 'dodecahedron')
            return (
              <Dodecahedron color={value.color} position={value.position} onClick={openModal} />
            );
        })}
      </CanvasView>

      <Button type="primary" onPress={goToSettings}>
        Configurações
      </Button>
    </Container>
  );
}
