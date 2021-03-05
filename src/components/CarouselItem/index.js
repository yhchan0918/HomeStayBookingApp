import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const CarouselItem = (props) => {
  const {post} = props;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate('DestinationDetail', {postID: post.id});
  };

  return (
    <Pressable
      onPress={onPressHandler}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}></Image>
        <View style={styles.descContainer}>
          <Text style={styles.bedroomsTxt}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.desc} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}>RM{post.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CarouselItem;
