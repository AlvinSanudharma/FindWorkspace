import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

const Checkout = () => {
  return (
    <View style={styles.container}>
      <Text>Checkout</Text>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
