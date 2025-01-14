import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import GradientBackground from '../components/GradientBackground'; // Import du composant GradientBackground

const VerificationScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = Array(4).fill(null).map(() => useRef(null)); // Références pour chaque champ

  const handleChange = (text, index) => {
    if (text.length > 1) return; // Empêche l'entrée de plusieurs caractères

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Passe automatiquement au champ suivant si le texte est saisi
    if (text && index < 3) {
      inputs[index + 1].current.focus();
    }

    // Revient au champ précédent si l'utilisateur supprime
    if (!text && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  const handleVerify = () => {
    const fullCode = code.join('');
    if (fullCode.length !== 4) {
      alert('Please enter a valid 4-digit code.');
      return;
    }
    console.log('Code submitted:', fullCode);
    alert('Code verified successfully!');
  };

  return (
    <View style={styles.container}>
      <GradientBackground />

      <Image
        source={require('../../assets/images/DA/logo.png')} // Remplace par le chemin de ton logo
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Enter Verification Code</Text>
      <Text style={styles.subtitle}>
        Please enter the 4-digit code sent to your email.
      </Text>

      <View style={styles.codeInputContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            ref={inputs[index]} // Référence pour chaque champ
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.resendText}>
          Didn't receive the code? <Text style={styles.resendLink}>Resend</Text>
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
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%', // Largeur totale des 4 cases avec espacement
    marginBottom: 30,
  },
  codeInput: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    width: 50, // Largeur d'une case
    height: 50, // Hauteur d'une case
    marginHorizontal: 5, // Espacement horizontal entre les cases
  },
  verifyButton: {
    backgroundColor: '#6200EE',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 15,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    color: '#666',
    fontSize: 14,
  },
  resendLink: {
    color: '#6200EE',
    fontWeight: 'bold',
  },
});

export default VerificationScreen;
