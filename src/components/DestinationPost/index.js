import React from 'react';
import {Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const DestinationPost = (props) => {
  const {post} = props;
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate('DestinationDetail', {postID: post.id});
  };

  return (
    <Pressable onPress={onPressHandler} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}></Image>
      <Text style={styles.bedroomsTxt}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.desc} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>RM{post.oldPrice}</Text>
        <Text style={styles.newPrice}>
          {'  '}RM{post.newPrice}
        </Text>{' '}
        / night
      </Text>

      <Text style={styles.totalPrice}>RM{post.totalPrice} total</Text>
    </Pressable>
  );
};

export default DestinationPost;
