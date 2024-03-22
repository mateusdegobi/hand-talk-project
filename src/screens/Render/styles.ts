import styled from 'styled-components/native';
import { Canvas } from '@react-three/fiber';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

export const CanvasView = styled(Canvas)`
  flex: 1;
  width: 100%;
`;
