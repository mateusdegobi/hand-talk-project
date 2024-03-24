import { Canvas } from '@react-three/fiber';
import Button from '@src/components/Button/Button';
import { Box } from '@src/components/GeometricFigures';
import InputWithLabel from '@src/components/Input/InputWithLabel/InputWithLabel';
import { modalPopUpControllers } from '@src/components/ModalPopUp/ModalPopUp';
import { useObjectsContext } from '@src/contexts/ObjectsContext';
import { GeometricObject } from '@src/core/domain/entities/GeometricObject';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Container, ObjectView } from './styles';

type ModalProps = {
  object: string;
  objectValue: GeometricObject;
};

export default function EditObjectModal({ object, objectValue }: ModalProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: { color: objectValue.color, rotation: objectValue.rotation },
  });

  const { onEditObject } = useObjectsContext();

  const { hide } = modalPopUpControllers;

  const handleSave = async () => {
    await handleSubmit(async ({ color, rotation }) => {
      await onEditObject(object, { color, rotation });
      hide();
    })();
  };

  return (
    <Container>
      <ObjectView>
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <Box color={objectValue.color} position={objectValue.position} />
        </Canvas>
      </ObjectView>
      <Controller
        name="color"
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel textLabel="Cor" onChangeText={onChange} value={value} />
        )}
      />
      <Controller
        name="rotation"
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel textLabel="Rotação" onChangeText={onChange} value={value} />
        )}
      />
      <Button type="primary" onPress={handleSave}>
        Salvar
      </Button>
    </Container>
  );
}
