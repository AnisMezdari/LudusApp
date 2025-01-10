import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ActivityCard = ({ activity, onFavoriteToggle }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{activity.title}</Text>
      <View style={styles.cardContent}>
        <Image source={activity.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text>Type: {activity.type}</Text>
          <Text>Âge: {activity.age}</Text>
          <Text>Forfait: {activity.package}</Text>
          <TouchableOpacity onPress={() => onFavoriteToggle(activity.id)}>
            <Text>{activity.favorite ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Espace entre le titre et le contenu
  },
  cardContent: {
    flexDirection: 'row', // Organise les éléments en ligne (image à gauche, texte à droite)
    alignItems: 'flex-start', // Aligne l'image et le texte en haut
  },
  image: {
    width: 100, // Taille de l'image (ajustable)
    height: 100, // Taille de l'image (ajustable)
    borderRadius: 8,
    marginRight: 15, // Espace entre l'image et le texte
  },
  textContainer: {
    flex: 1, // Permet au texte de prendre tout l'espace restant
  },
});

export default ActivityCard;
