import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

const HeaderBackground = () => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%">
        <Defs>
          {/* Dégradé radial pour les cercles */}
          <RadialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <Stop offset="0%" stopColor="#ffcccc" stopOpacity="0.9" />
            <Stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <Stop offset="0%" stopColor="#cce5ff" stopOpacity="0.8" />
            <Stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id="grad3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <Stop offset="0%" stopColor="#f6ff33" stopOpacity="0.3" />
            <Stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </RadialGradient>
        </Defs>

        {/* Cercles floutés */}
        <Circle cx="80" cy="60" r="130" fill="url(#grad1)" />
        <Circle cx="300" cy="100" r="120" fill="url(#grad2)" />
        <Circle cx="250" cy="50" r="90" fill="url(#grad3)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160, // Hauteur de la section du header
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    marginBottom : -100,
  },
});

export default HeaderBackground;
