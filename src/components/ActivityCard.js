import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ActivityCard = ({ activity, onFavoriteToggle }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{activity.title}</Text>
      <Text>Type: {activity.type}</Text>
      <Text>Âge: {activity.age}</Text>
      <Text>Forfait: {activity.package}</Text>
      <TouchableOpacity onPress={() => onFavoriteToggle(activity.id)}>
        <Text>{activity.favorite ? '❤️' : '🤍'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ActivityCard;
