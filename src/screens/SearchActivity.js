import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import activities from '../data/Activities';
import SearchBar from '../components/SearchBar';
import ActivityCard from '../components/ActivityCard';
import FilterButton from '../components/FilterButtons';

const SearchActivity = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    setFilteredActivities(activities);
  }, []);

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    if (filter === 'All') {
      setFilteredActivities(activities);
    } else {
      setFilteredActivities(
        activities.filter((activity) =>
          activity.type.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    setFilteredActivities(
      activities.filter((activity) =>
        activity.title.toLowerCase().includes(text.toLowerCase()) &&
        (selectedFilter === 'All' || activity.type.toLowerCase().includes(selectedFilter.toLowerCase()))
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header avec le dégradé */}
      <LinearGradient
        colors={[
          'rgba(255, 204, 204, 0.6)', // Rose pâle
          'rgba(204, 229, 255, 0.6)', // Bleu clair
          'rgba(204, 255, 229, 0.6)', // Vert clair
        ]}
        style={styles.header}
      >
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>Recherche</Text>
      </LinearGradient>

      <SearchBar value={searchTerm} onChangeText={handleSearch} />
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollView}
        >
          <FilterButton label="All" onSelectFilter={handleFilter} />
          <FilterButton label="Arts" onSelectFilter={handleFilter} />
          <FilterButton label="Outdoors" onSelectFilter={handleFilter} />
          <FilterButton label="Playground" onSelectFilter={handleFilter} />
          <FilterButton label="Museum" onSelectFilter={handleFilter} />
          <FilterButton label="Sports" onSelectFilter={handleFilter} />
        </ScrollView>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  filterContainer: {
    marginBottom: 15,
  },
  filterScrollView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

export default SearchActivity;
