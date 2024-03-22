import { NativeStackNavigationProp } from "@react-navigation/native-stack";

declare global {
  export type PublicStackParamsList = {
    Auth: undefined;
  };

  export type PublicStackNavigatorProps = NativeStackNavigationProp<
    PublicStackParamsList,
    "Auth"
  >;
}
