import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import activities from '../data/Activities';
import SearchBar from '../components/SearchBar';
import ActivityCard from '../components/ActivityCard';
import FilterButton from '../components/FilterButtons';
import HeaderBackground from '../components/HeaderBackground';
import {REACT_APP_GOOGLE_MAPS_API_KEY} from '@env'

const SearchActivity = () => {
  console.log("REACT_APP_GOOGLE_MAPS_API_KEY : " + REACT_APP_GOOGLE_MAPS_API_KEY);  // Vérifie si ta clé API est bien récupérée
  //console.log(GOOGLE_MAPS_API_KEY);
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
      <View style={styles.header}>
        <HeaderBackground />
        <View style={styles.headerContent}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.headerText}>Recherche</Text>
        </View>
      </View>

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
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerContent: {
    position: 'absolute',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: -10,
  },
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#333',
  },
  filterContainer: {
    marginBottom: 15,
  },
  mapContainer: {
    height: 300,
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  filterScrollView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

export default SearchActivity;
