import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
`;

export const ObjectArea = styled.View`
  flex: 3;
`;

export const InputArea = styled.View`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  margin: 10px 0px;
  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
