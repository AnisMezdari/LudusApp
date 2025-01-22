import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

const ActivityCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity  onPress = {onPress} style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.title}</Text>
      <Text style={styles.cardLocation}>{item.type} / {item.age} years</Text>
      <Text style={styles.distance}>à {item.distance} Km</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardLocation: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default ActivityCard;
