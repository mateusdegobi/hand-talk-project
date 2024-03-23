import React from 'react';
import { ViewProps } from 'react-native';

import { View } from './styles';

export default function Container({ children, ...rest }: ViewProps) {
  return <View {...rest}>{children}</View>;
}
