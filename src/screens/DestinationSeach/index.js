import React, {useState} from 'react';
import {View, TextInput, FlatList} from 'react-native';

import searchResults from '../../../assets/data/search';
import Destination from '../../components/Destination';
import styles from './styles';

const DestinationSearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={'Where are you going?'}
        value={searchInput}
        onChangeText={setSearchInput}
      />
      <FlatList
        data={searchResults}
        renderItem={({item}) => <Destination location={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
