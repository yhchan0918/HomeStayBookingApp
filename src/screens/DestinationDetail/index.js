import React, {useEffect, useState} from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';

import DetailedDestinationPost from '../../components/DetailedDestinationPost';
import styles from './styles';
import {getAccommodation} from '../../graphql/queries';

const DestinationDetailScreen = () => {
  const route = useRoute();
  const [accommdetail, setAccommDetail] = useState(null);

  useEffect(() => {
    const fetchSingleAccomm = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(getAccommodation, {id: route.params.postID}),
        );

        setAccommDetail(response.data.getAccommodation);
      } catch (e) {}
    };
    fetchSingleAccomm();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!accommdetail ? (
        <ActivityIndicator size="large" />
      ) : (
        <DetailedDestinationPost post={accommdetail} />
      )}
    </SafeAreaView>
  );
};

export default DestinationDetailScreen;
