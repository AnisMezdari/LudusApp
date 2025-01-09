import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Circle } from 'react-native-svg';

const HeaderBackground = () => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor="#ffcccc" stopOpacity="0.8" />
            <Stop offset="50%" stopColor="#cce5ff" stopOpacity="0.7" />
            <Stop offset="100%" stopColor="#ccffe5" stopOpacity="0.6" />
          </LinearGradient>
        </Defs>
        <Circle cx="150" cy="100" r="120" fill="url(#grad)" />
        <Circle cx="300" cy="200" r="180" fill="url(#grad)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    position: 'absolute', // Permet de superposer
    top: 0,
    left: 0,
  },
});

export default HeaderBackground;
