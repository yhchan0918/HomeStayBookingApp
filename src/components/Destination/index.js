import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const Destination = (props) => {
  const {location} = props;
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate('BookingGuests');
  };

  return (
    <Pressable onPress={onPressHandler} style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name={'location-pin'} size={25} />
      </View>
      <Text>{location.description}</Text>
    </Pressable>
  );
};

export default Destination;
