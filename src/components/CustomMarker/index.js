import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

import styles from './styles';

const CustomMarker = (props) => {
  const {place, isSelected, onPress} = props;
  return (
    <Marker coordinate={place.coordinate} onPress={onPress}>
      <View
        style={[
          styles.container,
          {backgroundColor: isSelected ? 'black' : 'white'},
        ]}>
        <Text style={[styles.txt, {color: isSelected ? 'white' : 'black'}]}>
          ${place.newPrice}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
