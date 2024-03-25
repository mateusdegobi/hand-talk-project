import { useNavigation } from '@react-navigation/native';
import Button from '@src/components/Button/Button';
import Container from '@src/components/Container/Container';
import { GeometricFigure } from '@src/components/GeometricFigures';
import { modalPopUpControllers } from '@src/components/ModalPopUp/ModalPopUp';
import { useObjectsContext } from '@src/contexts/ObjectsContext';
import { GeometricObject } from '@src/core/domain/entities/GeometricObject';
import { SignOut, Sliders } from 'phosphor-react-native';
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

  const openModal = (key: string, value: GeometricObject) => {
    modalPopUpControllers.show({
      component: <EditObjectModal object={key} objectValue={value} />,
      title: 'Editando objeto',
    });
  };

  return (
    <Container style={{ backgroundColor: 'black' }}>
      <Header>
        <Button type="tertiary" onPress={handleExit} icon={SignOut}>
          Sair
        </Button>
      </Header>

      <CanvasView>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />

        {objects &&
          Object.entries(objects).map(([key, value]) => {
            if (value.shape && value.color && value?.position) {
              return (
                <GeometricFigure
                  key={key}
                  shape={value.shape}
                  color={value.color}
                  position={value.position}
                  rotation={value.rotation}
                  onClick={() => openModal(key, value)}
                />
              );
            }
          })}
      </CanvasView>

      <Button type="primary" onPress={goToSettings} icon={Sliders}>
        Configurar objetos
      </Button>
    </Container>
  );
}
