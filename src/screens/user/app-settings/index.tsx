import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { MainAppParams } from '../../../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const AppSettings: FC<NativeStackScreenProps<MainAppParams, 'appSettings'>> = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default AppSettings;
