import { useNavigation } from '@react-navigation/native';
import { Canvas } from '@react-three/fiber';
import Button from '@src/components/Button/Button';
import Container from '@src/components/Container/Container';
import { Cube, Cone, Dodecahedron, GeometricFigure } from '@src/components/GeometricFigures';
import InputWithLabel from '@src/components/Input/InputWithLabel/InputWithLabel';
import { useObjectsContext } from '@src/contexts/ObjectsContext';
import { ObjectsType } from '@src/core/domain/entities/GeometricObject';
import React, { useState } from 'react';

import { InputArea, Row, ScrollView } from './styles';
import { ObjectKey } from './types';

export default function SettingsScreen() {
  const { goBack } = useNavigation();

  const { objects, onEditObject } = useObjectsContext();

  const [editObject, setEditObject] = useState<ObjectsType | undefined>(objects);

  const handleSave = async () => {
    await onEditObject('object1', editObject?.object1);
    await onEditObject('object2', editObject?.object2);
    await onEditObject('object3', editObject?.object3);
    goBack();
  };

  const handleEditObject = (
    objectKey: ObjectKey,
    object: ObjectsType[ObjectKey],
    color: string
  ) => {
    setEditObject({
      ...editObject,
      [objectKey]: { ...object, color },
    });
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.entries(objects || {}).map(([name, object]) => (
          <Row>
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={1.5} />

              <GeometricFigure color={object.color} position={[0, +1.5, 0]} shape={object.shape} />
            </Canvas>

            <InputArea>
              <InputWithLabel textLabel="Rotação" />
              <InputWithLabel
                textLabel="Cor"
                onChangeText={(color) => {
                  handleEditObject(name as ObjectKey, object, color);
                }}
              />
              <InputWithLabel textLabel="Tipo" />
            </InputArea>
          </Row>
        ))}
      </ScrollView>

      <Button type="tertiary" onPress={goBack}>
        Restaurar para padrão
      </Button>
      <Button type="primary" onPress={handleSave} style={{ marginTop: 10 }}>
        Salvar
      </Button>
    </Container>
  );
}
