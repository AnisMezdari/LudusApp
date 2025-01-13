import React, { useState, useEffect } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MapViewComponent = ({ markers }) => {
  const [location, setLocation] = useState(null);



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
