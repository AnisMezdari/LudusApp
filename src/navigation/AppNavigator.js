import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchActivity from '../screens/SearchActivity';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={SearchActivity} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
