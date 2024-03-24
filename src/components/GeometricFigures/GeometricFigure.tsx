import { MeshProps } from '@react-three/fiber';
import { ShapeType } from '@src/core/domain/entities/GeometricObject';

import { Cone } from './Cone';
import { Cube } from './Cube';

type GeometricFigureProps = {
  color: string;
  shape: ShapeType;
} & MeshProps;
export function GeometricFigure({ shape, color, ...rest }: GeometricFigureProps) {
  if (shape === 'cone') {
    return <Cone color={color} {...rest} />;
  }

  if (shape === 'cube') {
    return <Cube color={color} {...rest} />;
  }

  if (shape === 'dodecahedron') {
    return <Cone color={color} {...rest} />;
  }
}
