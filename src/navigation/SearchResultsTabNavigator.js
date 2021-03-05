import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';

import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMapScreen from '../screens/SearchResultsMap';
import {listAccommodations} from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  const route = useRoute();
  const {guests, viewport} = route.params.params;
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodationsResult = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(listAccommodations, {
            filter: {
              and: {
                maxGuests: {
                  ge: guests,
                },
                latitude: {
                  between: [viewport.southwest.lat, viewport.northeast.lat],
                },
                longitude: {
                  between: [viewport.southwest.lng, viewport.northeast.lng],
                },
              },
            },
          }),
        );
        setAccommodations(response.data.listAccommodations.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAccommodationsResult();
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name="List">
        {() => <SearchResultsScreen accommodations={accommodations} />}
      </Tab.Screen>
      <Tab.Screen name="Map">
        {() => <SearchResultsMapScreen accommodations={accommodations} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
