import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import GradientBackground from '../components/GradientBackground'; // Import du composant GradientBackground

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    console.log('Password reset request sent for:', email);
    alert('If this email is associated with an account, you will receive a password reset link.');
  };

  return (
    <View style={styles.container}>
      <GradientBackground />

      <Image
        source={require('../../assets/images/DA/logo.png')} // Remplace par le chemin de ton logo
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>
        Enter your email address below to receive a password reset link.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="abc@email.com"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
          <Text style={styles.resetButtonText}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.backToLogin}>
          Back to <Text style={styles.loginLink}>Login</Text>
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
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  form: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    color: '#333',
    width: '100%',
  },
  resetButton: {
    backgroundColor: '#6200EE',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backToLogin: {
    color: '#666',
    fontSize: 14,
    marginTop: 15,
  },
  loginLink: {
    color: '#6200EE',
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
