import React, {useState} from 'react';
import {View, TextInput, FlatList} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GP_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';

import SuggestedDestination from '../../components/SuggestedDestination';
import styles from './styles';

const DestinationSearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          navigation.navigate('BookingGuests', {
            viewport: details.geometry.viewport,
          });
        }}
        styles={{
          textInput: styles.input,
        }}
        fetchDetails
        query={{
          key: GP_API_KEY,
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestedDestination location={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
