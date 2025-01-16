import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import activities from '../data/Activities';
import SearchBar from '../components/SearchBar';
import FilterButton from '../components/FilterButtons';
import MapViewComponent from '../components/MapViewComponent';
import Icon from 'react-native-vector-icons/Feather';
import HeaderBackground from '../components/HeaderBackground'; // Ajout de l'import
import { useNavigation } from '@react-navigation/native';

const SearchActivity = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const navigation = useNavigation();

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

  const handlePrevActivity = () => {
    if (selectedActivityIndex > 0) {
      setSelectedActivityIndex(selectedActivityIndex - 1);
    }
  };

  const handleNextActivity = () => {
    if (selectedActivityIndex < filteredActivities.length - 1) {
      setSelectedActivityIndex(selectedActivityIndex + 1);
    }
  };

  const handleActivityPress = (activity) => {
    navigation.navigate('Calendar', { activity });
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
            type: activity.type,
            image: activity.image,
            age: activity.age,
            description : activity.description,
            price : activity.price,
            date : activity.date,
            address : activity.address,
          }))}
          onMarkerPress={handleMarkerPress}
        />
      </View>

      {/* Afficher l'arrière-plan du Header */}


      {/* Display Activity Info if a marker is clicked */}
      {selectedActivity && (
        <View style={styles.activityDetails}>
          <HeaderBackground style={styles.gradientBackground} />
          <TouchableOpacity style={styles.activityInfo} onPress={() => handleActivityPress(selectedActivity)}>
            <Image source={selectedActivity.image} style={styles.activityImage} />
            <View style={styles.navButtons}>
              <TouchableOpacity style={styles.leftArrowContainer} onPress={handlePrevActivity}>
                <Icon style={styles.leftArrow} name="chevron-left" size={45} color="#4B9BF1" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.rightArrowContainer} onPress={handleNextActivity}>
                <Icon name="chevron-right" size={45} color="#4B9BF1" />
              </TouchableOpacity>
            </View>
            <Text style={styles.activityTitle}>{selectedActivity.title}</Text>

            {/* Age and Category on the same line */}
            <View style={styles.activityMeta}>
              <Text style={styles.activityAge}>{selectedActivity.age} years</Text>
              <Text style={styles.activityType}>{selectedActivity.type}</Text>
            </View>

            {/* Si vous voulez supprimer la description de l'activité juste en dessous du marqueur, vous pouvez le faire ici */}
            {/* <Text style={styles.activityDescription}>{selectedActivity.description}</Text> */}
          </TouchableOpacity>
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
    width: '87%',
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
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 5,
    alignItems: 'center',
    width: '70%',
    zIndex: 3,
    flex: 1, // Important pour forcer l'expansion du conteneur
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', // Cela garantit que le fond couvre tout l'espace
    zIndex: 0, // Mettre derrière le contenu
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
    marginTop : 20
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  activityMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espacement entre les deux éléments
    width: '50%',
    marginTop: 12, // Ajouter un petit espace entre l'image et les textes
    marginBottom: 10
  },
  activityAge: {
    fontSize: 14,
    color: '#999',
  },
  activityType: {
    fontSize: 14,
    color: '#666',
  },
  activityLocation: {
    fontSize: 14,
    color: '#999',
    marginTop: -17,
  },
  activityDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  leftArrowContainer: {
    position: 'absolute',
    left: -135, // Ajoute une marge pour le positionner à gauche
    transform: [{ translateY: -60 }],
  },
  rightArrowContainer: {
    position: 'absolute',
    left: 90, // Ajoute une marge pour le positionner à gauche
    transform: [{ translateY: -57 }],
  },

});

export default SearchActivity;
