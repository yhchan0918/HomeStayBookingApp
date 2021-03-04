import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const BookingGuestsScreen = () => {
  const [adultsPax, setAdultsPax] = useState(0);
  const [childrenPax, setChildrenPax] = useState(0);
  const [infantsPax, setInfantsPax] = useState(0);
  const onPressHandler = () => {};
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={styles.adultsTxt}>Adults</Text>
          <Text style={styles.ageAboveTxt}>Age 13 or above</Text>
        </View>
        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => setAdultsPax(Math.max(0, adultsPax - 1))}
            style={styles.button}>
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <Text style={styles.value}>{adultsPax}</Text>
          <Pressable
            onPress={() => setAdultsPax(adultsPax + 1)}
            style={styles.button}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.adultsTxt}>Children</Text>
          <Text style={styles.ageAboveTxt}>Age 2-12</Text>
        </View>
        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => setChildrenPax(Math.max(0, childrenPax - 1))}
            style={styles.button}>
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <Text style={styles.value}>{childrenPax}</Text>
          <Pressable
            onPress={() => setChildrenPax(childrenPax + 1)}
            style={styles.button}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.adultsTxt}>Infants</Text>
          <Text style={styles.ageAboveTxt}>Under 2</Text>
        </View>
        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => setInfantsPax(Math.max(0, infantsPax - 1))}
            style={styles.button}>
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <Text style={styles.value}>{infantsPax}</Text>
          <Pressable
            onPress={() => setInfantsPax(infantsPax + 1)}
            style={styles.button}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default BookingGuestsScreen;
