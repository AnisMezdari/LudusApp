import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FilterButton = ({ label, onSelectFilter, style }) => {
  return (
    <TouchableOpacity onPress={() => onSelectFilter(label)} style={styles.filterButton}>
        <Text style={styles.filterText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    borderColor: 'orange',
    borderWidth: 1.5,
  },
  filterText: {
    color: '#000',
    fontSize: 12,
    fontWeight : "bold"
  },

});

export default FilterButton;
