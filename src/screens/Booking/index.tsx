import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

const Booking = () => {
  return (
    <View style={styles.container}>
      <Text>Booking</Text>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
