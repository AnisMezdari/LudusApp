import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ActivityCard from './ActivityCard';

const ActivitySection = ({ title, activities,onPressActivity, onFavoriteToggle  }) => {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        {activities.map((item) => (
          <ActivityCard onPress={() => onPressActivity(item)}  key={item.id} item={item} onFavoriteToggle={onFavoriteToggle}   />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#6C63FF',
    fontSize: 14,
  },
  cardContainer: {
    paddingLeft: 16,
    marginTop: 8,
  },
});

export default ActivitySection;
