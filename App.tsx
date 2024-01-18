import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@/screens/Home';
import Details from '@/screens/Details';
import Booking from '@/screens/Booking';
import Checkout from '@/screens/Checkout';
import Success from '@/screens/Success';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Booking: undefined;
  Checkout: undefined;
  Success: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Booking" component={Booking} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
