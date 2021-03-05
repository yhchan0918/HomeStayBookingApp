import React, {useState} from 'react';
import {FlatList, View, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import CarouselItem from '../../components/CarouselItem';

import styles from './styles';

const SearchResultsMapScreen = () => {
  const [selectedPlaceID, setSelectedPlaceID] = useState(null);
  const width = useWindowDimensions().width;

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
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={places}
          renderItem={({item}) => <CarouselItem post={item} />}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
        />
      </View>
    </View>
  );
};

export default SearchResultsMapScreen;
