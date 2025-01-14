
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const GradientBackground = () => {
  return (
    <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
      <Defs>
        <RadialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <Stop offset="0%" stopColor="#ffcccc" stopOpacity="0.8" />
          <Stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <Stop offset="0%" stopColor="#cce5ff" stopOpacity="0.9" />
          <Stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="grad3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <Stop offset="0%" stopColor="#f6ff33" stopOpacity="0.3" />
          <Stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="grad4" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <Stop offset="0%" stopColor="#cce5ff" stopOpacity="0.5" />
          <Stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="grad5" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <Stop offset="0%" stopColor="#f6ff33" stopOpacity="0.2" />
          <Stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
      </Defs>

      <Circle cx="0" cy="150" r="150" fill="url(#grad1)" />
      <Circle cx="100" cy="150" r="80" fill="url(#grad4)" />
      <Circle cx={width} cy="50" r="160" fill="url(#grad2)" />
      <Circle cx={width} cy="250" r="140" fill="url(#grad5)" />
      <Circle cx={width - 100} cy="50" r="100" fill="url(#grad3)" />
      <Circle cx="0" cy={height} r="160" fill="url(#grad1)" />
      <Circle cx="0" cy={height - 150} r="70" fill="url(#grad4)" />
      <Circle cx={width - 50} cy={height} r="130" fill="url(#grad1)" />
      <Circle cx={width} cy={height - 200} r="160" fill="url(#grad2)" />
    </Svg>
  );
};

export default GradientBackground;
