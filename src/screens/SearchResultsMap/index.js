import React, {useState, useEffect, useRef} from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import CustomMarker from '../../components/CustomMarker';
import CarouselItem from '../../components/CarouselItem';
import styles from './styles';

const SearchResultsMapScreen = (props) => {
  const {accommodations} = props;
  const [selectedPlaceID, setSelectedPlaceID] = useState(null);
  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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
    const index = accommodations.findIndex(
      (place) => place.id === selectedPlaceID,
    );
    flatListRef.current.scrollToIndex({index});

    const selectedPlace = accommodations[index];

    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      laititudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
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
          latitude: 3.191224778394676,
          longitude: 101.70287153673175,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        {accommodations.map((place) => (
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
          data={accommodations}
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
