import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';  // Importation des permissions

const App = () => {
  useEffect(() => {
    // Fonction pour demander la permission de géolocalisation
    const requestLocationPermission = async () => {
      try {
        const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (result === RESULTS.GRANTED) {
          console.log('Permission granted');
        } else {
          console.log('Permission denied');
        }
      } catch (error) {
        console.error('Permission request failed', error);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
