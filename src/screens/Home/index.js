import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import BG from '../../../assets/images/wallpaper.jpg';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  const onPressHandler = () => {};
  return (
    <View>
      <Pressable style={styles.searchBtn} onPress={onPressHandler}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchBtnText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground source={BG} style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable style={styles.button} onPress={onPressHandler}>
          <Text style={styles.btnText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
