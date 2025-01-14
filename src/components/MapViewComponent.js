import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MapViewComponent = ({ markers }) => {
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
    }, 500); // Retarder de 500ms, tu peux ajuster ce délai si nécessaire

    return () => clearTimeout(timer); // Nettoyer si le composant est démonté avant
  }, []); // Le useEffect ne s'exécute qu'une fois au montage

  // Vérifier si la localisation est définie avant de rendre la carte
  if (!location) {
    return <View style={styles.mapContainer}><Text>Chargement...</Text></View>;
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={location} // Utilise 'region' pour que la carte suive la position de l'utilisateur
        showsUserLocation={true}
        showsMyLocationButton={true}
        provider="google"
      >
        {markers && markers.map((marker, index) => (
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
