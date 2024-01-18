import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

const Success = () => {
  return (
    <View style={styles.container}>
      <Text>Success</Text>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
