import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FilterButton = ({ label, onSelectFilter, style }) => {
  return (
    <TouchableOpacity onPress={() => onSelectFilter(label)} style={style}>
      <LinearGradient
        colors={['#FFDDC1', '#FFFFFF']} // Dégradé subtilement coloré vers le blanc
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.filterButton, style]}
      >
        <Text style={styles.filterText}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 1)',
    border : 5,
  },
  filterText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333', // Texte sombre pour contraster avec le dégradé clair
  },

});

export default FilterButton;
