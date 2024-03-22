import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RenderScreen, SettingsScreen } from '@src/screens';
import React from 'react';

const Stack = createNativeStackNavigator<AuthenticatedStackParamsList>();

const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Render">
      <Stack.Screen name="Render" component={RenderScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
