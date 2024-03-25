import styled from 'styled-components/native';

export const SwitcherArea = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 10px 0px;
`;

type IActive = {
  active?: boolean;
};

interface ISwitchButtonProps extends IActive {}

export const SwitchButton = styled.TouchableOpacity<ISwitchButtonProps>`
  background-color: ${({ active, theme }) => (active ? theme.colors.primary : '#fff')};
  padding: 5px 10px;
  border-radius: 8px;
  margin-horizontal: 10px;
  align-items: center;
  justify-content: center;
`;

interface ISwitchTextProps extends IActive {}
export const SwitchText = styled.Text<ISwitchTextProps>`
  color: ${({ active }) => (active ? '#fff' : '#666')};
  font-size: 14px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  padding: 3px 5px;
  align-items: center;
  justify-content: center;
`;
