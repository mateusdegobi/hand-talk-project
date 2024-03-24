import { NavigationContainer } from '@react-navigation/native';
import ModalPopUpComponent from '@src/components/ModalPopUp/ModalPopUp';
import useAppearance from '@src/hooks/useAppearance';
import Routes from '@src/routes';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import '@src/auth/firebase_auth';

export default function App() {
  const { theme } = useAppearance();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" backgroundColor={theme.colors.primary} translucent />
        <Routes />

        <ModalPopUpComponent />
      </ThemeProvider>
    </NavigationContainer>
  );
}
