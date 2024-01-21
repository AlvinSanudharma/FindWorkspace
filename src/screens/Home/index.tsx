import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Button from '@/components/Button';
import {RootStackParamList} from '@app';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={{height: 4}} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Button label="Go to Details" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
