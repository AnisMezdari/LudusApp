import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientBackground from '../components/GradientBackground';
import { useNavigation, useRoute } from '@react-navigation/native';

const ActivityDetails = () => {
  const navigation = useNavigation(); // Récupère l'objet de navigation
  const route = useRoute();  // Récupère le route object
  const { activity } = route.params;

  return (
    <View style={styles.container}>
      <GradientBackground />
      <ScrollView>
        <Image source={activity.image} style={styles.image} />
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={24}
            onPress={() => navigation.navigate('Map')} // Navigue vers l'écran "Map"
          />
          <Text style={styles.headerText}>Event Details</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{activity.title}</Text>

          <View style={styles.infoRow}>
            <Icon name="calendar-outline" size={20} />
            <Text style={styles.date}>{activity.date}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="location-outline" size={20} />
            <Text style={styles.infoText}>{activity.address}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="logo-euro" size={20} />
            <Text style={styles.infoText}>Estimate price :  {activity.price}€</Text>
          </View>
          <Text style={styles.sectionTitle}>About Event</Text>
          <Text style={styles.description}>{activity.description}</Text>
        </View>
      </ScrollView>

      {/* Bouton Réserver en bas de l'écran */}
      <TouchableOpacity style={styles.reserveButton} onPress={() => console.log('Reserver pressed')}>
        <Text style={styles.reserveButtonText}>Réserver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 200 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerText: { fontSize: 18, fontWeight: 'bold', marginLeft: 8 },
  content: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 8 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  infoText: { fontSize: 16, marginLeft: 8 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 16 },
  date: { fontSize: 16, lineHeight: 22, marginLeft: 8 },
  description: { fontSize: 17, lineHeight: 23 },

  // Style du bouton Réserver
  reserveButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    alignItems: 'center',
    margin: 16,
    borderRadius: 8,
    width: '80%',
    alignSelf: 'center',
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ActivityDetails;
