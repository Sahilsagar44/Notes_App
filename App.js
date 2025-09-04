import React from 'react';
import './global.css';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/theme/ThemeProvider';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}