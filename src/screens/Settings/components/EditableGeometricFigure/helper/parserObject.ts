import { ShapeType } from '@src/core/domain/entities/GeometricObject';

export const parserObjectShapeToData = (object: ShapeType) => {
  switch (object) {
    case 'cube':
      return 'Cubo';
    case 'cone':
      return 'Cone';
    case 'dodecahedron':
      return 'Dodecaedro';
    default:
      return 'Cubo';
  }
};

export const parserObjectDataToShape = (object: string) => {
  switch (object) {
    case 'Cubo':
      return 'cube';
    case 'Cone':
      return 'cone';
    case 'Dodecaedro':
      return 'dodecahedron';
    default:
      return 'cube';
  }
};
