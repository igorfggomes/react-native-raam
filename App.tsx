import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';

import theme from './src/theme';

import { SignIn } from '@screens/SignIn';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent backgroundColor='transparent'/>
      <SignIn/>
    </ThemeProvider>
  );
}
