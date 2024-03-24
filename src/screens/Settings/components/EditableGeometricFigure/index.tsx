import { Canvas } from '@react-three/fiber';
import { GeometricFigure } from '@src/components/GeometricFigures';
import InputWithLabel from '@src/components/Input/InputWithLabel/InputWithLabel';

import { ObjectKey } from '../../types';

import { InputArea, Row } from './styles';

type Props = {
  name: string;
  object: any;
  editObject: (objectKey: ObjectKey, object: ObjectsType[ObjectKey], color: string) => void;
};

export default function GeometricObjectSettings({ name, object, editObject }: Props) {
  return (
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
            editObject(name as ObjectKey, object, color);
          }}
        />
        <InputWithLabel textLabel="Tipo" />
      </InputArea>
    </Row>
  );
}
