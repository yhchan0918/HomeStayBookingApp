import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

const SuggestedDestination = (props) => {
  const {location} = props;

  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name={'location-pin'} size={25} />
      </View>
      <Text>{location.description}</Text>
    </View>
  );
};

export default SuggestedDestination;
