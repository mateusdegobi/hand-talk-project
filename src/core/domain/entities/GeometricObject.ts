export type ShapeType = 'cube' | 'cone' | 'dodecahedron';

export class GeometricObject {
  public color: string;
  public position: [number, number, number?];
  public rotation: number;
  public shape: ShapeType;

  constructor(props: GeometricObject) {
    this.color = props.color;
    this.position = props.position;
    this.rotation = props.rotation;
    this.shape = props.shape;
  }
}

export type ObjectsType = {
  object1: GeometricObject;
  object2: GeometricObject;
  object3: GeometricObject;
};
