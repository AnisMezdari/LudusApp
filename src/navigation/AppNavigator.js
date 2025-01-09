import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchActivity from '../screens/SearchActivity';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
  <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
     <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SearchActivity" component={SearchActivity} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
