import { Canvas } from '@react-three/fiber';
import Button from '@src/components/Button/Button';
import { GeometricFigure } from '@src/components/GeometricFigures';
import InputWithLabel from '@src/components/Input/InputWithLabel/InputWithLabel';
import { modalPopUpControllers } from '@src/components/ModalPopUp/ModalPopUp';
import Switcher from '@src/components/Switcher';
import { useObjectsContext } from '@src/contexts/ObjectsContext';
import { GeometricObject } from '@src/core/domain/entities/GeometricObject';
import {
  parserObjectDataToShape,
  parserObjectShapeToData,
} from '@src/screens/Settings/components/EditableGeometricFigure/helper/parserObject';
import { FloppyDisk } from 'phosphor-react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Container, ObjectView } from './styles';

type ModalProps = {
  object: string;
  objectValue: GeometricObject;
};

export default function EditObjectModal({ object, objectValue }: ModalProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      color: objectValue.color,
      rotation: objectValue.rotation,
      shape: objectValue.shape,
    },
  });

  const { onEditObject, setConfigObjects } = useObjectsContext();

  const { hide } = modalPopUpControllers;

  const handleSave = async () => {
    await handleSubmit(async ({ color, rotation, shape }) => {
      await onEditObject(object, { color, rotation, shape });
      await setConfigObjects({
        [object]: {
          ...objectValue,
          color,
          rotation,
          shape,
        },
      });
      hide();
    })();
  };

  return (
    <Container>
      <ObjectView>
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />

          <GeometricFigure
            shape={objectValue.shape}
            color={objectValue.color}
            rotation={objectValue.rotation}
            position={[0, 0, 0]}
            scale={4}
          />
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

      <Controller
        name="shape"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Switcher
            data={['Cubo', 'Cone', 'Dodecaedro']}
            onChangeValue={(shape) => onChange(parserObjectDataToShape(shape))}
            value={parserObjectShapeToData(value || objectValue.shape)}
          />
        )}
      />

      <Button type="primary" onPress={handleSave} icon={FloppyDisk}>
        Salvar
      </Button>
    </Container>
  );
}
