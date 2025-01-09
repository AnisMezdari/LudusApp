import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilterButton = ({ label, onSelectFilter }) => {
  return (
    <TouchableOpacity onPress={() => onSelectFilter(label)}>
      <Text style={styles.filterButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    minWidth: 100,
    textAlign: 'center',
  },
});

export default FilterButton;
