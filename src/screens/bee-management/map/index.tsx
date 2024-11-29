import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParams } from '../../../../types';

const Map: FC<NativeStackScreenProps<BottomTabParams, 'map'>> = () => {
  return (
    <View>
      <Text>Map</Text>
    </View>
  );
};

export default Map;
