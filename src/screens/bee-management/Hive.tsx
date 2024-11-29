import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../types';

const Hive: FC<NativeStackScreenProps<RootStackParams, 'Hive'>> = ({route}) => {
  let id = route.params.id;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Hive;

const styles = StyleSheet.create({});
