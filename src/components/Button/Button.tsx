import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonView, Text } from './styles';

type ButtonProps = {
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  iconType?: string;
} & TouchableOpacityProps;

export default function Button({ type, iconType, children, color, ...props }: ButtonProps) {
  return (
    <ButtonView type={type} color={color} disabled={props?.disabled} {...props}>
      <Text type={type} color={type !== 'primary' ? color : undefined}>
        {children}
      </Text>

      {/* {iconType && (
        <IconImage
          iconType={props.iconType}
          tintColor={!props.border ? 'white' : props?.color ? props?.color : colors.main}
          style={{ marginLeft: children && 10 }}
          height={props?.iconHeight || 20}
          width={props?.iconWidth || 20}
        />
      )} */}
    </ButtonView>
  );
}
