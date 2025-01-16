import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Pour une icône moderne

const MapViewComponent = ({ markers, onMarkerPress }) => {
  const [location, setLocation] = useState(null);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            latitude,
            longitude,
            latitudeDelta: 0.00422,
            longitudeDelta: 0.00621,
          });
        },
        (error) => {
          console.log('Erreur géolocalisation:', error);
          setLocation({
            latitude: 48.8566,
            longitude: 2.3522,
            latitudeDelta: 0.00422,
            longitudeDelta: 0.00621,
          });
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        }
      );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleGeolocationPress = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.00422,
          longitudeDelta: 0.00621,
        });
      },
      (error) => {
        console.log('Erreur géolocalisation:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  if (!location) {
    return (
      <View style={styles.mapContainer}>
        <Text>Chargement...</Text>
      </View>
    );
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation={true}
        showsMyLocationButton={false} // Désactivé pour éviter la superposition avec le bouton personnalisé
        provider="google"
      >
        {markers &&
          markers.map((marker, index) =>
            marker.latitude && marker.longitude ? (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.title}
                onPress={() => onMarkerPress(marker)}
              />
            ) : null
          )}
      </MapView>

      {/* Bouton de géolocalisation en haut à droite */}
      <TouchableOpacity
        style={styles.geolocationButton}
        onPress={handleGeolocationPress}
      >
        <Icon name="my-location" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  geolocationButton: {
    position: 'absolute',
    top: 33, // En haut
    right: 12, // À droite
    backgroundColor: '#007BFF',
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Ombre pour donner un effet "flottant"
  },
});

export default MapViewComponent;
