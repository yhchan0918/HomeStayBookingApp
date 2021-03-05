import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {withAuthenticator} from 'aws-amplify-react-native';

import Router from './src/navigation/Router';

function App() {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}

export default withAuthenticator(App);
