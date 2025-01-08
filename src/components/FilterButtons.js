import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilterButtons = ({ onSelectFilter }) => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity onPress={() => onSelectFilter('Playground')}>
        <Text style={styles.filterButton}>Playground</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelectFilter('Museum')}>
        <Text style={styles.filterButton}>Museum</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelectFilter('Sports')}>
        <Text style={styles.filterButton}>Sports</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});

export default FilterButtons;
