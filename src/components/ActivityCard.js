import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ActivityCard = ({ item, onPress, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(item.favorite); // L'état initial est basé sur la valeur de l'activité

  const toggleFavorite = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus); // Met à jour l'état local du favori
    onFavoriteToggle(item.id, newFavoriteStatus); // Notifie le parent pour mettre à jour l'attribut dans les données
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.title}</Text>
      <Text style={styles.cardLocation}>{item.type} / {item.age} years</Text>
      <Text style={styles.distance}>à {item.distance} Km</Text>

      {/* Icône de coeur en bas à droite */}
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIconContainer}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'} // Changer l'icône selon l'état
          size={24}
          color={isFavorite ? 'red' : '#666'} // Changer la couleur en fonction de l'état
        />
      </TouchableOpacity>
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
    position: 'relative', // Permet de positionner l'icône en bas à droite
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
  distance: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  favoriteIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default ActivityCard;
