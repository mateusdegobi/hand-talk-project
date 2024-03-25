import React from 'react';

import { SwitchButton, SwitchText, SwitcherArea } from './styles';

interface ISwictherStatusProps {
  data: string[];
  value: string;
  onChangeValue: (value: string, index: number) => void;
}

export default function Switcher({ data, value, onChangeValue }: ISwictherStatusProps) {
  return (
    <SwitcherArea>
      {data.map((item, index) => (
        <SwitchButton key={item} onPress={() => onChangeValue(item, index)} active={item === value}>
          <SwitchText active={item === value}>{item}</SwitchText>
        </SwitchButton>
      ))}
    </SwitcherArea>
  );
}
