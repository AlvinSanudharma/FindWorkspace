import {Text, View} from 'react-native';
import React from 'react';

type Props = {
  label: string;
};

const Button = ({label}: Props) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

export default Button;
