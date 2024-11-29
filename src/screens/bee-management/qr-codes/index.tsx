import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainAppParams } from '../../../../types';

const QRCodes: FC<NativeStackScreenProps<MainAppParams, 'qrCodes'>> = () => {
  return (
    <View>
      <Text>QRCodes</Text>
    </View>
  );
};

export default QRCodes;
