import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { BottomTabParams } from '../../../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const GeneralData: FC<NativeStackScreenProps<BottomTabParams, 'generalData'>> = () => {
  return (
    <View>
      <Text>AllHivesData</Text>
    </View>
  );
};

export default GeneralData;
