import { useFrame } from '@react-three/fiber';
import type { MeshProps } from '@react-three/fiber';
import React, { useRef } from 'react';
import type { BufferGeometry, Material, Mesh } from 'three';

type Props = {
  color: string;
} & MeshProps;

export function Cone({ color, ...rest }: Props) {
  const mesh = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta;
    mesh.current.rotation.y += delta;
  });

  return (
    <mesh {...rest} ref={mesh}>
      <coneGeometry args={[0.5, 0.7, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
