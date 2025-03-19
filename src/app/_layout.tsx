import { Stack } from 'expo-router';
import "@/global.css";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Poppins_900Black, useFonts } from '@expo-google-fonts/poppins';
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Poppins_900Black,
    DMSans_700Bold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  return (
    <GluestackUIProvider>
      <Stack screenOptions={{ headerShown: false}}>
        <Stack.Screen name="create-account" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}
