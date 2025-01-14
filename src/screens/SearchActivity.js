import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import activities from '../data/Activities';
import SearchBar from '../components/SearchBar';
import ActivityCard from '../components/ActivityCard';
import FilterButton from '../components/FilterButtons';
import HeaderBackground from '../components/HeaderBackground';
import MapViewComponent from '../components/MapViewComponent';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

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
       <View style={styles.header}>
         <HeaderBackground />
         <View style={styles.headerContent}>
           <Image source={require('../../assets/images/DA/logo.png')} style={styles.logo} />
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

           <FilterButton label="All" onSelectFilter={() => handleFilter('All')} />
           <FilterButton label="Arts" onSelectFilter={() => handleFilter('Arts')} />
           <FilterButton label="Outdoors" onSelectFilter={() => handleFilter('Outdoors')} />
           <FilterButton label="Playground" onSelectFilter={() => handleFilter('Playground')} />
           <FilterButton label="Museum" onSelectFilter={() => handleFilter('Museum')} />
           <FilterButton label="Sports" onSelectFilter={() => handleFilter('Sports')} />
         </ScrollView>
       </View>


      <MapViewComponent
        markers={filteredActivities.map((activity) => ({
          latitude: activity.location.latitude,
          longitude: activity.location.longitude,
          title: activity.title,
          description: activity.type,
        }))}
      />

      <ScrollView>
        {filteredActivities && filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))
        ) : (
          <Text style={styles.noActivitiesText}>Aucune activité trouvée</Text>
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
  noActivitiesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});

export default SearchActivity;
