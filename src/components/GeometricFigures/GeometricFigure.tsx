import { MeshProps } from '@react-three/fiber';
import { ShapeType } from '@src/core/domain/entities/GeometricObject';
import React, { useCallback, useEffect, useRef } from 'react';
import { BufferGeometry, Material, Mesh } from 'three';

const renderShape = {
  cube: <boxGeometry args={[0.7, 0.7, 0.7]} />,
  cone: <coneGeometry args={[0.5, 0.7, 32]} />,
  dodecahedron: <dodecahedronGeometry args={[0.5, 0]} />,
};

type GeometricFigureProps = {
  color: string;
  shape: ShapeType;
  scale: number;
  rotation: number;
} & MeshProps;
export function GeometricFigure({ rotation, scale, shape, color, ...rest }: GeometricFigureProps) {
  const mesh = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  const changeMeshRotation = useCallback(() => {
    if (mesh.current) {
      mesh.current.rotation.z = rotation || 0;
    }
  }, [rotation]);

  useEffect(() => {
    changeMeshRotation();
  }, [changeMeshRotation]);

  return (
    <mesh scale={scale} {...rest} ref={mesh}>
      {renderShape[shape]}
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
