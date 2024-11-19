import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationNavigator from './AuthenticationNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { RootStackParams } from '../utils/Types';
import MainAppNavigator from './MainAppNavigator';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Authentication">
    <Stack.Screen name="Authentication" component={AuthenticationNavigator} />
    <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    <Stack.Screen name="MainApp" component={MainAppNavigator} />
  </Stack.Navigator>
);

export default RootStackNavigator;
