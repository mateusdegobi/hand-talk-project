import { NativeStackNavigationProp } from '@react-navigation/native-stack';

declare global {
  export type AuthenticatedStackParamsList = {
    Render: undefined;
    Settings: undefined;
  };

  export type AuthenticatedStackNavigatorProps = NativeStackNavigationProp<
    AuthenticatedStackParamsList,
    'Render',
    'Settings',
  >;
}
