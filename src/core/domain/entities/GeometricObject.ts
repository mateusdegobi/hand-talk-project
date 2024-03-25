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

export type PartialGeometricObject = Partial<Omit<GeometricObject, 'position'>>;
export type ObjectsType = {
  object1?: PartialGeometricObject;
  object2?: PartialGeometricObject;
  object3?: PartialGeometricObject;
};
