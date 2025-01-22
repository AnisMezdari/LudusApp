import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderBackground from '../components/HeaderBackground';
import GradientBackground from '../components/GradientBackground';
import ActivitySection from '../components/ActivitySection';
import activities from '../data/Activities';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [ageVisible, setAgeVisible] = useState(false);
  const [favoritesVisible, setFavoritesVisible] = useState(false);
  const [forfaitVisible, setForfaitVisible] = useState(false);
  const navigation = useNavigation();

  const filters = ['All', 'Playground', 'Spa', 'Water Park', 'Zoo', 'Sports', 'Museum', 'Arts', 'Outdoors'];
  const ageRanges = ['0-5', '6-10', '11-15', '16+'];
  const forfaits = ['1-Week', '2-Week', 'Monthly', 'Annual'];

  const handleActivityPress = (activity) => {
    navigation.navigate('ActivityDetails', { activity });
  };

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    setIsDropdownVisible(false);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) || activity.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || activity.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const ourSelection = filteredActivities.filter((activity) => activity.favorite);
  const recommendations = filteredActivities.filter((activity) => activity.recommended);
  const nearOfYou = filteredActivities.filter((activity) => activity.distance && activity.distance <= 10);

  return (
    <View style={styles.container}>
      <GradientBackground />
      <HeaderBackground />

      <View style={styles.header}>
        <Image source={require('../../assets/images/DA/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.menuIconContainer} onPress={() => setIsDropdownVisible(!isDropdownVisible)}>
          <Ionicons name="menu" size={42} color="black" />
        </TouchableOpacity>
      </View>

      {/* Dropdown Container */}
      {isDropdownVisible && (
        <View style={styles.dropdownContainer}>
          {/* Categories Section */}
          <TouchableOpacity onPress={() => setCategoryVisible(!categoryVisible)}>
            <Text style={styles.dropdownHeader}>Categories</Text>
          </TouchableOpacity>
          {categoryVisible && (
            <View style={styles.dropdownItems}>
              {filters.map((filter, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => handleFilter(filter)}
                >
                  <Text style={styles.dropdownText}>{filter}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Age Section */}
          <TouchableOpacity onPress={() => setAgeVisible(!ageVisible)}>
            <Text style={styles.dropdownHeader}>Age</Text>
          </TouchableOpacity>
          {ageVisible && (
            <View style={styles.dropdownItems}>
              {ageRanges.map((age, index) => (
                <TouchableOpacity key={index} style={styles.dropdownItem}>
                  <Text style={styles.dropdownText}>{age}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Favorites Section */}
          <TouchableOpacity onPress={() => setFavoritesVisible(!favoritesVisible)}>
            <Text style={styles.dropdownHeader}>Favoris</Text>
          </TouchableOpacity>
          {favoritesVisible && (
            <View style={styles.dropdownItems}>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Show Favorites</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Forfait Section */}
          <TouchableOpacity onPress={() => setForfaitVisible(!forfaitVisible)}>
            <Text style={styles.dropdownHeader}>Forfait</Text>
          </TouchableOpacity>
          {forfaitVisible && (
            <View style={styles.dropdownItems}>
              {forfaits.map((forfait, index) => (
                <TouchableOpacity key={index} style={styles.dropdownItem}>
                  <Text style={styles.dropdownText}>{forfait}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      )}

      <View style={[styles.searchContainer, isDropdownVisible && styles.searchContainerWithDropdown]}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search activities..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScrollView}>
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.filterButtonTag, selectedFilter === filter && styles.selectedFilter]}
              onPress={() => handleFilter(filter)}
            >
              <Text style={[styles.filterText, selectedFilter === filter && styles.selectedFilterText]}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.scrollableSections}>
        <ActivitySection title="Our Selection" activities={ourSelection} onPressActivity={handleActivityPress} />
        <ActivitySection title="Recommendations" activities={recommendations} onPressActivity={handleActivityPress} />
        <ActivitySection title="Near of You" activities={nearOfYou} onPressActivity={handleActivityPress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fffff',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 125,
    justifyContent: 'center', // Centre le logo
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  menuIconContainer: {
    position: 'absolute', // Positionne l'icône à droite
    right: 22,
    top: '70%', // Centre verticalement
    transform: [{ translateY: -17 }], // Ajuste la position de l'icône pour un centrage parfait
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 5,
    borderRadius: 8,
    height: 60,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    transition: 'all 0.3s ease',  // Ajoute une transition fluide
  },
  searchContainerWithDropdown: {
    marginTop: 5, // Réduit l'espace entre la barre de recherche et le dropdown
  },
  searchIcon: {
    marginRight: 8,
    marginLeft: 7,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  filterButtonText: {
    color: '#FFF',
    fontSize: 12,
  },
  filterContainer: {
    marginBottom: 15,
  },
  filterScrollView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  filterButtonTag: {
    backgroundColor: '#E0E0E0',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    flexDirection: 'row',
    height : 35,
    alignItems : "center",
  },
  selectedFilter: {
    backgroundColor: '#6C63FF',
  },
  filterText: {
    color: '#000',
    fontSize: 12,
  },
  selectedFilterText: {
    color: '#FFF',
  },
  scrollableSections: {
    flex: 1,
  },

  // Styles pour le modal
  dropdownContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)', // Fond semi-transparent
    paddingVertical: 10,
    zIndex: 10, // S'assurer qu'il est au-dessus des autres éléments

  },
  dropdownHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: '#333',
  },
  dropdownItems: {
    paddingHorizontal: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Home;
