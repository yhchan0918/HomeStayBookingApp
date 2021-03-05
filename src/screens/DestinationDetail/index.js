import React from 'react';
import {SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import DetailedDestinationPost from '../../components/DetailedDestinationPost';
import places from '../../../assets/data/feed';
import styles from './styles';

const DestinationDetailScreen = () => {
  const route = useRoute();
  console.log(route.params.postID);
  const post = places.find((place) => place.id === route.params.postID);

  return (
    <SafeAreaView style={styles.container}>
      <DetailedDestinationPost post={post} />
    </SafeAreaView>
  );
};

export default DestinationDetailScreen;
