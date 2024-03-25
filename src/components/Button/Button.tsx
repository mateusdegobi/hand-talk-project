import { IconProps } from 'phosphor-react-native';
import React, { useMemo } from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { ButtonView, Text } from './styles';
import { useTheme } from 'styled-components/native';

type ButtonProps = {
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  icon?: ({ weight, color, size, style, mirrored }: IconProps) => React.JSX.Element;
  isLoading?: boolean;
} & TouchableOpacityProps;

export default function Button({
  type,
  iconType,
  isLoading,
  children,
  color,
  icon,
  ...props
}: ButtonProps) {
  const { colors } = useTheme();

  const itemColor = useMemo(() => {
    if (type === 'primary') {
      return colors.white;
    }
    if (type === 'secondary' || type === 'tertiary') {
      return colors.primary;
    }
    return colors.white;
  }, [colors.primary, colors.white, type]);

  return (
    <ButtonView type={type} color={color} disabled={props?.disabled} {...props}>
      <Text type={type} color={itemColor}>
        {children}
      </Text>

      {icon &&
        !isLoading &&
        icon({ color: itemColor, size: 20, weight: 'bold', style: { marginLeft: 5 } })}

      {isLoading && <ActivityIndicator size="small" color={itemColor} />}
    </ButtonView>
  );
}
