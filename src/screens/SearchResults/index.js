import React from 'react';
import {View, FlatList} from 'react-native';
import DestinationPost from '../../components/DestinationPost';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <DestinationPost post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
