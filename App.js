import React from 'react';
import {SafeAreaView} from 'react-native';
import Post from './src/components/Post';
import HomeScreen from './src/screens/Home';
import feed from './assets/data/feed';

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post post={feed[0]} />
    </SafeAreaView>
  );
}
