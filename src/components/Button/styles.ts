import styled, { css } from 'styled-components/native';

type ButtonViewProps = {
  color?: string;
  type?: 'primary' | 'secondary' | 'tertiary';
};

export const ButtonView = styled.TouchableOpacity<ButtonViewProps>`
  background-color: ${({ color, theme }) => color || theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ type, theme, color }) =>
    type === 'secondary' &&
    css`
      background-color: #ffffff00;
      border: 3px solid ${color || theme.colors.primary};
    `}
  ${({ type }) =>
    type === 'tertiary' &&
    css`
      background-color: #ffffff00;
      border: none;
    `}
`;

type TextProps = {
  color?: string;
  type?: 'primary' | 'secondary' | 'tertiary';
};
export const Text = styled.Text<TextProps>`
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-weight: 800;

  margin-right: 5px;

  ${({ type, color, theme }) =>
    type === 'secondary' &&
    css`
      color: ${color || theme.colors.primary};
    `}
  ${({ type, color, theme }) =>
    type === 'tertiary' &&
    css`
      color: ${color || theme.colors.primary};
    `}
`;
