import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useAuthContext } from '@/hooks/use-auth-context'
import AuthProvider from '@/providers/auth-provider'

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { SplashScreenController } from '@/components/splash-screen-controller';

export const unstable_settings = {
  anchor: '(tabs)',
};

// Separate RootNavigator so we can access the AuthContext
function RootNavigator() {
  const { isLoggedIn } = useAuthContext()

  return (
    <Stack>
      {/* Protected app routes */}
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
      </Stack.Protected>

      {/* Auth routes (only when logged out) */}
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      {/* Other routes */}
      <Stack.Screen name="not-found" />
      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
    </Stack>
  )
}


export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    BaskervvilleSC: require('../assets/fonts/BaskervvilleSC-VariableFont_wght.ttf'),
  })
  
  if (!loaded) {
    // Async font loading only occurs in development.
    return null
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <SplashScreenController />
          <RootNavigator />
          <StatusBar style="auto" />
        </ThemeProvider>
      </AuthProvider>
    </ApplicationProvider>
  );
}
