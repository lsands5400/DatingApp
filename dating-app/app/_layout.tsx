import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useAuthContext } from '@/hooks/use-auth-context'
import AuthProvider from '@/providers/auth-provider'

export const unstable_settings = {
  anchor: '(tabs)',
};

// Separate RootNavigator so we can access the AuthContext
function RootNavigator() {
  const { isLoggedIn } = useAuthContext()

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Screen name="+not-found" />
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
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
