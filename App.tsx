
import React from 'react';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/hooks/useAuhtContext';
import Navigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
}



export default App;
