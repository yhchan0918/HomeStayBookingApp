import React, {useState, useEffect, useRef} from 'react';
import {FlatList, View, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {API, graphqlOperation} from 'aws-amplify';

import CustomMarker from '../../components/CustomMarker';
import CarouselItem from '../../components/CarouselItem';
import {listAccommodations} from '../../graphql/queries';
import styles from './styles';

const SearchResultsMapScreen = () => {
  const [accommodations, setAccommodations] = useState([]);
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
    const index = accommodations.findIndex(
      (place) => place.id === selectedPlaceID,
    );
    flatListRef.current.scrollToIndex({index});

    const selectedPlace = accommodations[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      laititudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    mapRef.current.animateToRegion(region);
  }, [selectedPlaceID]);

  useEffect(() => {
    const fetchAccommodationsResult = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(listAccommodations),
        );
        setAccommodations(response.data.listAccommodations.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAccommodationsResult();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 3.191224778394676,
          longitude: 101.70287153673175,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
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
