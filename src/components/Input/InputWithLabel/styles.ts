import styled, { css } from 'styled-components/native';

import { LabelProps, TextInputProps } from './styles.types';

export const Content = styled.View`
  margin-bottom: 15px;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  border: 1px solid #ededed;
  border-radius: 4px;
  background: #fcfcfc;
  padding: 8px 14px;
  color: #5b5b5b;
  font-size: 15px;

  ${({ isError, theme }) => {
    if (isError) {
      return css`
        border: 2px solid red;
        color: ${theme.colors.error};
      `;
    }
  }}
  ${({ isActive, theme }) => {
    if (isActive) {
      return css`
        border: 2px solid ${theme.colors.primary};
      `;
    }
  }}
`;

export const Label = styled.Text<LabelProps>`
  color: #666;
  font-size: 13px;
  font-weight: 500;
  padding: 5px 0px;

  ${({ isActive, theme }) => {
    if (isActive) {
      return css`
        font-weight: 700;
        color: ${theme.colors.primary};
      `;
    }
  }}
`;

export const TextError = styled.Text`
  color: red;
  font-weight: 800;
`;
