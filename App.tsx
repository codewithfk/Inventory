/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { InventoryProvider } from './src/context/InventoryContext';
import InventoryScreen from './src/screen/InventoryList';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <InventoryProvider>
    <InventoryScreen />
  </InventoryProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
