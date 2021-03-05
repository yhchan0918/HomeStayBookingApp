import React, {useState, useEffect, useRef} from 'react';
import {FlatList, View, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import CarouselItem from '../../components/CarouselItem';

import styles from './styles';

const SearchResultsMapScreen = () => {
  const [selectedPlaceID, setSelectedPlaceID] = useState(null);
  const width = useWindowDimensions().width;
  const flatListRef = useRef();
  const mapRef = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceID(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceID || !flatListRef) return;
    const index = places.findIndex((place) => place.id === selectedPlaceID);
    flatListRef.current.scrollToIndex({index});

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      laititudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    mapRef.current.animateToRegion(region);
  }, [selectedPlaceID]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
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
      <View
        style={{
          position: 'absolute',
          bottom: 10,
        }}>
        <FlatList
          data={places}
          renderItem={({item}) => <CarouselItem post={item} />}
          ref={flatListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMapScreen;
