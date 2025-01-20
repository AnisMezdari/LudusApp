import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MapViewComponent = React.forwardRef(({ markers, onMarkerPress, selectedMarker }, ref) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);

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
          setIsLoading(false);
        },
        (error) => {
          console.log('Erreur géolocalisation:', error);
          setLocation({
            latitude: 48.8566,
            longitude: 2.3522,
            latitudeDelta: 0.00422,
            longitudeDelta: 0.00621,
          });
          setIsLoading(false);
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
    setIsLoading(true);
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.00422,
          longitudeDelta: 0.00621,
        });
        setIsLoading(false);
      },
      (error) => {
        console.log('Erreur géolocalisation:', error);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  if (isLoading) {
    return (
      <View style={styles.mapContainer}>
        <ActivityIndicator size="large" color="#4B9BF1" style={styles.loadingSpinner} />
      </View>
    );
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={ref}
        style={styles.map}
        region={location}
        showsUserLocation={true}
        showsMyLocationButton={false}
        provider="google"
        tracksViewChanges={true}
      >
        {markers &&
          markers.map((marker, index) => {
            const isActive = selectedMarker && selectedMarker.id === marker.id;

            return marker.location.latitude && marker.location.longitude ? (
              <Marker
                key={`${marker.id}${isActive}`}
                coordinate={{
                  latitude: marker.location.latitude,
                  longitude: marker.location.longitude,
                }}
                pinColor={isActive ? '#FFFF00' : '#B8860B'}
                onPress={() => onMarkerPress(marker)}
              >
              </Marker>
            ) : null;
          })}
      </MapView>

      <TouchableOpacity
        style={styles.geolocationButton}
        onPress={handleGeolocationPress}
      >
        <Icon name="my-location" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  geolocationButton: {
    position: 'absolute',
    top: 33,
    right: 12,
    backgroundColor: '#007BFF',
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  loadingSpinner: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -25 }],
  },

  calloutContainer: {
  padding: 5,
  backgroundColor: 'white',
  borderRadius: 5,
  width: 120, // Ajuste selon la taille du texte
  justifyContent: 'center',
  alignItems: 'center',
},
calloutText: {
  fontSize: 14,
  fontWeight: 'bold',
  color: 'black',
},
});

export default MapViewComponent;
