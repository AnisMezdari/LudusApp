import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Rechercher une activité..."
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
});

export default SearchBar;
