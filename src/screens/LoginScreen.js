import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  Switch,
} from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
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

      <Image
        source={require('../../assets/images/DA/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="abc@email.com"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Your password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <View style={styles.options}>
          <View style={styles.rememberMeContainer}>
            {/* Switch à gauche du texte */}
            <Switch
              trackColor={{ false: '#767577', true: '#4B9BF1' }} // Bleu quand inactif, bleu clair quand activé
              thumbColor={isEnabled ? '#FFEB3B' : '#f4f3f4'} // Jaune pour le rond quand activé
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switch} // Style pour augmenter la taille
            />
            <Text style={styles.rememberMe}>Remember Me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Image
            source={require('../../assets/images/Utils/ButtonLogin.png')} // Remplacer par le chemin de ton image
            style={styles.imageButton}
          />
        </TouchableOpacity>

        {/* Texte OR en gris */}
        <Text style={styles.orText}>OR</Text>

      </View>

      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../assets/images/Utils/GoogleLogo.png')} // Remplace par le logo Google
            style={styles.socialButtonIcon}
          />
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../assets/images/Utils/FacebookLogo.png')} // Remplace par le logo Facebook
            style={styles.socialButtonIcon}
          />
          <Text style={styles.socialButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: -10
  },
  form: {
    width: '80%',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    color: '#333',
    width: '100%',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMe: {
    color: '#666',
    fontSize: 14,
    marginLeft: 10, // Espacement entre le switch et le texte
  },
  forgotPassword: {
    color: '#6200EE',
    fontSize: 14,
    marginTop : 4,
  },
  loginButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  imageButton: {
    width: '100%', // Largeur de l'image
    height: 64, // Hauteur de l'image
    resizeMode: 'contain', // Adapter l'image sans déformer
  },
  socialLogin: {
    textAlign: 'center',
  },
  socialButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  socialButtonIcon: {
    width: 35,
    height: 35,
    marginLeft: 15,
  },
  socialButtonText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center', // Centrer le texte
    flex: 1, // Prendre tout l'espace restant pour centrer
    marginLeft : -23
  },
  signupText: {
    color: '#666',
    fontSize: 14,
    marginTop: 5,
  },
  signupLink: {
    color: '#6200EE',
    fontWeight: 'bold',
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] // Augmenter la taille du switch
  },
  orText: {
    color: '#888',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop : 8,
    marginBottom : -10,
  },
});

export default LoginScreen;
