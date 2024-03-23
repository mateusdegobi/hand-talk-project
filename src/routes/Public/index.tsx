import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from '@src/screens';
import React from 'react';

const Stack = createNativeStackNavigator<PublicStackParamsList>();

function PublicNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
}

export default PublicNavigator;
