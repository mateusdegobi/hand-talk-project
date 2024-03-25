import { Canvas } from '@react-three/fiber';
import { GeometricFigure } from '@src/components/GeometricFigures';
import InputWithLabel from '@src/components/Input/InputWithLabel/InputWithLabel';
import Switcher from '@src/components/Switcher';
import { GeometricObject } from '@src/core/domain/entities/GeometricObject';
import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { parserObjectDataToShape, parserObjectShapeToData } from './helper/parserObject';
import { CanvasArea, Container, InputArea, Row } from './styles';

type Props = {
  name: string;
  control: Control<FieldValues, any>;
  object: GeometricObject;
};

export default function GeometricObjectSettings({ name, control, object }: Props) {
  return (
    <Container>
      <Row>
        <CanvasArea>
          <Canvas style={{ flex: 1, width: 120 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />

            <GeometricFigure
              scale={3}
              color={object.color}
              position={[0, 0, 0]}
              shape={object.shape}
              rotation={object.rotation}
            />
          </Canvas>
        </CanvasArea>

        <InputArea>
          <Controller
            control={control}
            name={`${name}-color`}
            render={({ field: { value, onChange } }) => (
              <InputWithLabel
                textLabel="Cor"
                defaultValue={object.color}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name={`${name}-rotation`}
            render={({ field: { value, onChange } }) => (
              <InputWithLabel
                textLabel="Rotação"
                onChangeText={onChange}
                defaultValue={object.rotation.toString()}
                value={value}
                keyboardType="numeric"
              />
            )}
          />
        </InputArea>
      </Row>

      <Controller
        name={`${name}-shape`}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Switcher
            data={['Cubo', 'Cone', 'Dodecaedro']}
            onChangeValue={(shape) => onChange(parserObjectDataToShape(shape))}
            value={parserObjectShapeToData(value || object.shape)}
          />
        )}
      />
    </Container>
  );
}
