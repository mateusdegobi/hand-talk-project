import { Box, Cone, Dodecahedron } from '@src/components/GeometricFigures';
import React from 'react';

import { CanvasView, Container } from './styles';

export default function RenderScreen() {
  return (
    <Container>
      <CanvasView>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />

        <Box color="red" position={[0, +1.5, 0]} />
        <Cone color="yellow" position={[0, 0, 0]} />
        <Dodecahedron color="green" position={[0, -1.5, 0]} />
      </CanvasView>
    </Container>
  );
}
