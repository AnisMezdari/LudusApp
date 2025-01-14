import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Switch } from 'react-native';
import GradientBackground from '../components/GradientBackground'; // Import du composant GradientBackground

const LoginScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <GradientBackground /> 

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
            <Switch
              trackColor={{ false: '#767577', true: '#4B9BF1' }}
              thumbColor={isEnabled ? '#FFEB3B' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.rememberMe}>Remember Me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Image
            source={require('../../assets/images/Utils/ButtonLogin.png')}
            style={styles.imageButton}
          />
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>
      </View>

      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../assets/images/Utils/GoogleLogo.png')}
            style={styles.socialButtonIcon}
          />
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../assets/images/Utils/FacebookLogo.png')}
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
    marginLeft: 10,
  },
  forgotPassword: {
    color: '#6200EE',
    fontSize: 14,
    marginTop: 4,
  },
  loginButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  imageButton: {
    width: '100%',
    height: 64,
    resizeMode: 'contain',
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
    textAlign: 'center',
    flex: 1,
    marginLeft: -23
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
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
  },
  orText: {
    color: '#888',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: -10,
  },
});

export default LoginScreen;
