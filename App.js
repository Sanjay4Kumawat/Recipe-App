import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { FavoritesProvider } from './src/context/FavoritesContext';

const App = () => {
  return (
    <FavoritesProvider>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </FavoritesProvider>
  );
};

export default App;
