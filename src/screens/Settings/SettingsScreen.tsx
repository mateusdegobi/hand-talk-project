import { useNavigation } from '@react-navigation/native';
import Button from '@src/components/Button/Button';
import Container from '@src/components/Container/Container';
import { useObjectsContext } from '@src/contexts/ObjectsContext';
import { ObjectsType } from '@src/core/domain/entities/GeometricObject';
import { ClockClockwise, FloppyDisk } from 'phosphor-react-native';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import GeometricObjectSettings from './components/EditableGeometricFigure';
import { ScrollView } from './styles';

export default function SettingsScreen() {
  const { goBack } = useNavigation();

  const { objects, onEditAllObjects, setConfigObjects } = useObjectsContext();

  const { control, handleSubmit } = useForm();

  const handleSave = useCallback(async () => {
    await handleSubmit(async (data) => {
      const objectsToUpdate: ObjectsType = {
        object1: { ...objects?.object1 },
        object2: { ...objects?.object2 },
        object3: { ...objects?.object3 },
      };

      Object.entries(data).forEach(([key, value]) => {
        const [objectId, property] = key.split('-');
        if (property === 'rotation') {
          value = value ? parseInt(value, 10) : 0;
        }
        if (value !== undefined) {
          objectsToUpdate[objectId] = {
            ...objectsToUpdate[objectId],
            [property]: value,
          };
        }
      });

      try {
        await onEditAllObjects(objectsToUpdate);
        setConfigObjects(objectsToUpdate);
      } catch (e) {
        console.log(e);
      }

      goBack();
    })();
  }, [
    goBack,
    handleSubmit,
    objects?.object1,
    objects?.object2,
    objects?.object3,
    onEditAllObjects,
    setConfigObjects,
  ]);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.entries(objects || {}).map(([name, object]) => (
          <GeometricObjectSettings name={name} control={control} object={object} />
        ))}
      </ScrollView>

      <Button type="tertiary" onPress={goBack} icon={ClockClockwise}>
        Restaurar para padrão
      </Button>
      <Button type="primary" onPress={handleSave} icon={FloppyDisk} style={{ marginTop: 10 }}>
        Salvar
      </Button>
    </Container>
  );
}
