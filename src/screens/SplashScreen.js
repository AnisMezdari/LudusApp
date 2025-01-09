import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Attendre 2 secondes avant de naviguer vers "SearchActivity"
    const timer = setTimeout(() => {
      navigation.replace('SearchActivity'); // Replace pour éviter de revenir au Splash
    }, 2000);

    return () => clearTimeout(timer); // Nettoie le timer au cas où
  }, [navigation]);

  return (
    <LinearGradient
      colors={[
        'rgba(255, 204, 204, 0.6)', // Rose pâle translucide
        'rgba(204, 229, 255, 0.6)', // Bleu clair translucide
        'rgba(204, 255, 229, 0.6)', // Vert clair translucide
        '#ffffff', // Blanc dominant
      ]}
      style={styles.container}
    >
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 270,
    height: 270,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333', // Texte doux mais lisible
  },
});

export default SplashScreen;
