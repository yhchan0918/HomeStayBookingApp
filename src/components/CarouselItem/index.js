import React from 'react';
import {View, Text, Image} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles';

const CarouselItem = (props) => {
  const {post} = props;
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.container, {width: width - 60}]}>
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
            <Text style={styles.newPrice}>${post.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CarouselItem;
