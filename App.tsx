import React, { useEffect } from 'react';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions'; // Gestion des permissions
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';  // Importer le Stack Navigator
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import SearchActivity from './src/screens/SearchActivity';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import VerificationScreen from './src/screens/VerificationScreen'
import ResetPasswordScreen from './src/screens/ResetPasswordScreen'
import ActivityDetails from './src/screens/ActivityDetails'

// Création des onglets
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Créer un Stack Navigator

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ActivityDetails" component={ActivityDetails} />
    </Stack.Navigator>
  );
};

const MapStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MapScreen" component={SearchActivity} />
      <Stack.Screen name="ActivityDetails" component={ActivityDetails} />
    </Stack.Navigator>
  );
};


const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={LoginScreen} />
      <Stack.Screen name="Inscription" component={SignUpScreen} />
      <Stack.Screen name="VerifCode" component={VerificationScreen} />
      <Stack.Screen name="Reset" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Map':
              iconName = 'compass-outline';
              break;
            case 'Account':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
     <Tab.Screen name="Home" component={HomeStack} />
     <Tab.Screen name="Map" component={MapStack} />
     <Tab.Screen name="Account" component={AccountStack} />
     <Tab.Screen name="Inscription" component={SignUpScreen} />
    <Tab.Screen name="VerifCode" component={VerificationScreen} />
    <Tab.Screen name="Reset" component={ResetPasswordScreen} />
    </Tab.Navigator>
  );
};

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
