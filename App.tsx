import { NavigationContainer } from '@react-navigation/native';
import useAppearance from '@src/hooks/useAppearance';
import Routes from '@src/routes';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const { theme } = useAppearance();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" backgroundColor={theme.colors.primary} translucent />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
