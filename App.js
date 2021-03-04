import React from 'react';
import {SafeAreaView} from 'react-native';
import Post from './src/components/Post';
import HomeScreen from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
  );
}
