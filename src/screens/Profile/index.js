import React from 'react';
import {Text, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Auth} from 'aws-amplify';

import styles from './styles';

const ProfileScreen = () => {
  const onLogout = async () => {
    Auth.signOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onLogout} style={styles.logoutBtn}>
        <Text style={styles.logoutTxt}>Log out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;
