import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import activities from '../data/Activities'; // Assure-toi que le chemin est correct
import SearchBar from '../components/SearchBar';
import ActivityCard from '../components/ActivityCard';
import FilterButton from '../components/FilterButtons';

const SearchActivity = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredActivities, setFilteredActivities] = useState([]);
  console.log(activities);
  useEffect(() => {
    setFilteredActivities(activities); // Initialiser filteredActivities avec activities une fois le composant monté
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
    setFilteredActivities(
      activities.filter((activity) =>
        activity.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchTerm} onChangeText={handleSearch} />
      <View style={styles.filterContainer}>
        <FilterButton label="All" onPress={() => setFilteredActivities(activities)} />
        <FilterButton label="Arts" onPress={() => {}} />
        <FilterButton label="Outdoors" onPress={() => {}} />
      </View>
      <ScrollView>
        {filteredActivities && filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))
        ) : (
          <Text>No activities found</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
});

export default SearchActivity;
