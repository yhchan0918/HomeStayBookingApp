import React from 'react';
import {SafeAreaView} from 'react-native';
import Post from './src/components/Post';
import HomeScreen from './src/screens/Home';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSeach';

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <SearchResultsScreen /> */}
      <DestinationSearchScreen />
    </SafeAreaView>
  );
}
