import { Canvas } from '@react-three/fiber';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

export const CanvasView = styled(Canvas)`
  flex: 1;
  width: 100%;
`;
