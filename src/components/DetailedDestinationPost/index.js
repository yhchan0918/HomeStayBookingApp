import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

const DetailedDestinationPost = (props) => {
  const {post} = props;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
      <Text style={styles.description}>{post.description}</Text>
    </ScrollView>
  );
};

export default DetailedDestinationPost;
