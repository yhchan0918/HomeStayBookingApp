import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import DestinationPost from '../../components/DestinationPost';
import {API, graphqlOperation} from 'aws-amplify';

import {listAccommodations} from '../../graphql/queries';

const SearchResultsScreen = () => {
  const [accommodations, setAccommodations] = useState([]);

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
    <View>
      <FlatList
        data={accommodations}
        renderItem={({item}) => <DestinationPost post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
