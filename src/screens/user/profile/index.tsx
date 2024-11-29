import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParams } from '../../../../types';

const Profile: FC<NativeStackScreenProps<BottomTabParams, 'profile'>> = () => {
  return (
    <View>
      <Text>profile</Text>
    </View>
  );
};

export default Profile;
