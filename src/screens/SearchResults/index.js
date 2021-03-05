import React from 'react';
import {View, FlatList} from 'react-native';
import DestinationPost from '../../components/DestinationPost';

const SearchResultsScreen = (props) => {
  const {accommodations} = props;

  return (
    <View>
      <FlatList
        data={accommodations}
        renderItem={({item}) => <DestinationPost post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
