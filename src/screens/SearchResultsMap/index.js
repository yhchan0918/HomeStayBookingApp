import React, {useState} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import CarouselItem from '../../components/CarouselItem';

import styles from './styles';

const SearchResultsMapScreen = () => {
  const [selectedPlaceID, setSelectedPlaceID] = useState(null);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place) => (
          <CustomMarker
            isSelected={place.id === selectedPlaceID}
            onPress={() => setSelectedPlaceID(place.id)}
            key={place.id}
            place={place}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 35}}>
        <CarouselItem post={places[0]} />
      </View>
    </View>
  );
};

export default SearchResultsMapScreen;
