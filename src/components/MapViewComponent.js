import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MapViewComponent = ({ markers, onMarkerPress }) => {
  const [location, setLocation] = useState(null);

  // Utiliser useLayoutEffect pour s'assurer que le contexte est prêt
  useLayoutEffect(() => {
    // Retarder l'appel de la géolocalisation pour éviter de toucher au contexte trop tôt
    const timer = setTimeout(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            latitude,
            longitude,
            latitudeDelta: 0.00422, // Zoom ajustable
            longitudeDelta: 0.00621, // Zoom ajustable
          });
        },
        (error) => {
          console.log("Erreur géolocalisation:", error);
          // Si une erreur se produit, définissons une position par défaut
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

  if (!location) {
    return <View style={styles.mapContainer}><Text>Chargement...</Text></View>;
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={location} // Utilise 'region' pour que la carte suive la position de l'utilisateur
        showsUserLocation={true}
        showsMyLocationButton={false} // Masquer le bouton par défaut de géolocalisation
        provider="google"
      >
        {markers && markers.map((marker, index) => (
          marker.latitude && marker.longitude ? (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
              description={marker.description}
              onPress={() => onMarkerPress(marker)} // Passer l'objet marker à onMarkerPress
            />
          ) : null
        ))}
      </MapView>

      {/* Bouton de géolocalisation en bas à droite */}
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => {
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
              console.log("Erreur géolocalisation:", error);
            },
            {
              enableHighAccuracy: true,
              timeout: 15000,
              maximumAge: 10000,
            }
          );
        }}
      >
        <Text style={styles.locationButtonText}>📍</Text> {/* Tu peux remplacer l'icône par une autre */}
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
  locationButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
  locationButtonText: {
    fontSize: 24,
    color: '#333',
  },
});

export default MapViewComponent;
