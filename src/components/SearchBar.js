import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Rechercher une activité..."
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor="#666" // Couleur du texte du placeholder
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white', // Fond blanc pour la barre
    borderRadius: 8,
    elevation: 5, // Ajoute une ombre sous la barre de recherche si nécessaire
  },
  input: {
    height: 50,
    borderColor: '#ccc',

    paddingLeft: 10,
    fontSize: 16,
    color: '#333', // Couleur du texte en noir
    borderRadius: 8,
  },
});

export default SearchBar;
