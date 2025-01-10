import React, { useState, useEffect } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MapViewComponent = ({ markers }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Demander la géolocalisation lorsque le composant est monté
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => {
        console.log(error);
        // Tu peux définir une position par défaut si l'utilisateur refuse la géolocalisation
        setLocation({
          latitude: 48.8566, // Paris
          longitude: 2.3522, // Paris
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  if (!location) {
    return <View style={styles.mapContainer}><Text>Loading...</Text></View>;
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={location}
        showsUserLocation={true}
        showsMyLocationButton={true}
        provider="google"
      >
        {markers &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
              description={marker.description}
            />
          ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: 200,
    width: '100%',
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapViewComponent;
