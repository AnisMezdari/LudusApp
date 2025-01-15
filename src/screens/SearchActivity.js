import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import activities from '../data/Activities';
import SearchBar from '../components/SearchBar';
import FilterButton from '../components/FilterButtons';
import MapViewComponent from '../components/MapViewComponent';

const SearchActivity = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
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

  const handleMarkerPress = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <SearchBar value={searchTerm} onChangeText={handleSearch} />
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollView}
        >
          <FilterButton label="All" onSelectFilter={() => handleFilter('All')} />
          <FilterButton label="Arts" onSelectFilter={() => handleFilter('Arts')} />
          <FilterButton label="Outdoors" onSelectFilter={() => handleFilter('Outdoors')} />
          <FilterButton label="Playground" onSelectFilter={() => handleFilter('Playground')} />
          <FilterButton label="Museum" onSelectFilter={() => handleFilter('Museum')} />
          <FilterButton label="Sports" onSelectFilter={() => handleFilter('Sports')} />
        </ScrollView>
      </View>

      {/* Google Map */}
      <View style={styles.mapContainer}>
        <MapViewComponent
          markers={filteredActivities.map((activity) => ({
            latitude: activity.location.latitude,
            longitude: activity.location.longitude,
            title: activity.title,
            description: activity.type,
            image : activity.image
          }))}
          onMarkerPress={handleMarkerPress}
        />
      </View>

      {/* Display Activity Info if a marker is clicked */}
      {selectedActivity && (
        <View style={styles.activityDetails}>
          <View style={styles.activityInfo}>

            <Image source={selectedActivity.image} style={styles.activityImage} />
            <Text style={styles.activityTitle}>{selectedActivity.title}</Text>
            <Text style={styles.activityType}>{selectedActivity.type}</Text>
            <Text style={styles.activityLocation}>
              {selectedActivity.latitude}, {selectedActivity.longitude}
            </Text>
            <Text style={styles.activityDescription}>{selectedActivity.description}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    zIndex: 2, // La barre de recherche est au-dessus de la carte
    position: 'absolute', // Placer la barre de recherche en haut
    top: 20, // Ajuster si nécessaire
    left: 0,
    right: 0,
    padding: 10,
  },
  filterContainer: {
    zIndex: 2,
    marginTop: 90, // Déplace les filtres un peu plus bas pour éviter la barre de recherche
    marginBottom: 15,
  },
  filterScrollView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  mapContainer: {
    position: 'absolute', // La carte occupe tout l'écran en arrière-plan
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // La carte est derrière la barre de recherche et les filtres
  },
  activityDetails: {
    position: 'absolute',
    bottom: 20, // Distance ajustée pour éviter la superposition
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    elevation: 5,
    alignItems: 'center',
    width: '80%',
    zIndex: 3, // Les détails de l'activité sont au-dessus de la carte et autres éléments
  },
  activityInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  activityImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  activityType: {
    fontSize: 16,
    color: '#666',
  },
  activityLocation: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  activityDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
});

export default SearchActivity;
