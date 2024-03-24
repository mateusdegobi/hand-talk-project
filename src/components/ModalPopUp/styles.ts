import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Modal = styled.Modal`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const BackgroundFade = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000030;
`;

interface IContainerModalProps {
  maxWidth?: number;
}

export const ContainerModal = styled(Animated.View)<IContainerModalProps>`
  max-width: ${({ maxWidth }) => maxWidth || 80}%;
  background-color: #fff;
  border-radius: 10px;
  max-height: 80%;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 20px;
  align-items: center;
`;
export const FakeView = styled.View`
  width: 15px;
  height: 15px;
`;
export const Title = styled.Text`
  color: #444;
  font-weight: 700;
  font-size: 20px;
  margin: 0px 15px;
`;
export const CloseIcon = styled.Image``;
