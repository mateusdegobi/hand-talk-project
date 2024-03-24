import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RenderScreen from '@src/screens/Render/RenderScreen';
import SettingsScreen from '@src/screens/Settings/SettingsScreen';
import React from 'react';

const Stack = createNativeStackNavigator<AuthenticatedStackParamsList>();

function AuthenticatedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Render">
      <Stack.Screen name="Render" component={RenderScreen} />
      <Stack.Screen
        name="Settings"
        options={{ headerShown: true, title: 'Configurações' }}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthenticatedNavigator;
