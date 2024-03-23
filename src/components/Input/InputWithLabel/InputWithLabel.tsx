import { ForwardedRef, forwardRef, useState } from 'react';
import { TextInputProps, TextInput as TextInputRN } from 'react-native';

import { Content, Label, TextError, TextInput } from './styles';

type Props = {
  textLabel?: string;
  isError?: boolean;
  messageError?: string;
} & TextInputProps;

function TextInputWithLabel(
  { textLabel, isError, messageError, ...props }: Props,
  ref: ForwardedRef<TextInputRN>
) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Content>
      {textLabel && <Label isActive={isActive}>{textLabel}</Label>}
      <TextInput
        ref={ref}
        isError={isError}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        isActive={isActive}
        {...props}
      />

      {messageError && isError && <TextError>{messageError}</TextError>}
    </Content>
  );
}

export default forwardRef(TextInputWithLabel);
