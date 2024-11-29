import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { BottomTabParams } from '../../../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const ActionHistory: FC<NativeStackScreenProps<BottomTabParams, 'history'>> = () => {
  return (
    <View>
      <Text>ActionHistory</Text>
    </View>
  );
};

export default ActionHistory;
