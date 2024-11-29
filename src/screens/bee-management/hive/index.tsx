import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainAppParams } from '../../../../types';

const Hive: FC<NativeStackScreenProps<MainAppParams, 'hive'>> = ({route}) => {
  let id = route.params.id;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Hive;
