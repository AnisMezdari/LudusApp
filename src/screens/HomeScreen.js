import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderBackground from '../components/HeaderBackground';
import activities from '../data/Activities';
import GradientBackground from '../components/GradientBackground'; // Import du composant GradientBackground

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Playground', 'Spa', 'Water Park', 'Zoo', 'Sports', 'Museum', 'Arts', 'Outdoors'];

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    console.log(`Selected Filter: ${filter}`);
  };

  // Filtrer les activités en fonction du type sélectionné
  const filteredActivities = selectedFilter === 'All'
    ? activities
    : activities.filter(activity => activity.type === selectedFilter);

  // Section "Our Selection" - Filtre basé sur une sélection spéciale ou des activités favorites
  const ourSelection = activities.filter(activity => activity.favorite); // Exemple avec `favorite: true`

  // Section "Recommendations" - Filtre basé sur un critère de recommandation
  const recommendations = activities.filter(activity => activity.recommended); // Exemple avec `recommended: true`

  // Section "Near of You" - Filtre basé sur la proximité, ici un exemple fictif avec la distance
  const nearOfYou = activities.filter(activity => activity.distance && activity.distance <= 10); // Exemple avec `distance <= 10km`

  return (
    <View style={styles.container}>
      {/* Ajout du fond dégradé */}
      <GradientBackground />

      {/* Ajout du composant HeaderBackground */}
      <HeaderBackground />

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="white" />
        {/* Ajout du logo */}
        <Image source={require('../../assets/images/DA/logo.png')} style={styles.logo} />
        <Ionicons name="notifications" size={24} color="white" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" />
        <Text style={styles.searchInput}>Search...</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollView}
        >
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterButtonTag,
                selectedFilter === filter && styles.selectedFilter,
              ]}
              onPress={() => handleFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.selectedFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* ScrollView vertical pour les sections */}
      <ScrollView style={styles.scrollableSections}>
        {/* Section "Our Selection" */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Selection</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
          {ourSelection.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardText}>{item.title}</Text>
              <Text style={styles.cardLocation}>{item.location.latitude}, {item.location.longitude}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Section "Recommendations" */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
          {recommendations.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardText}>{item.title}</Text>
              <Text style={styles.cardLocation}>{item.location.latitude}, {item.location.longitude}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Section "Near of You" */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Near of You</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
          {nearOfYou.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardText}>{item.title}</Text>
              <Text style={styles.cardLocation}>{item.location.latitude}, {item.location.longitude}</Text>
            </View>
          ))}
        </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 125,
    position: 'relative',
  },
  logo: {
    width: 150, // Ajuste la taille du logo
    height: 150,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 16,
    padding: 10,
    borderRadius: 8,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16 },
  filterButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  filterButtonText: { color: '#FFF', fontSize: 12 },
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
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  seeAll: { color: '#6C63FF', fontSize: 14 },
  cardContainer: {
    paddingLeft: 16,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    width: 200,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  cardText: { fontSize: 16, fontWeight: 'bold' },
  cardLocation: { fontSize: 12, color: '#666', marginTop: 4 },
  scrollableSections: {
    flex: 1, // Ajoute flex pour que ce container prenne tout l'espace disponible
  },
});

export default Home;
