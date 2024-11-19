import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionHistory from '../screens/bee-management/ActionHistory';
import AllHivesData from '../screens/bee-management/AllHivesData';
import Map from '../screens/bee-management/Map';
import HiveData from '../screens/bee-management/HiveData';
import HiveRegistration from '../screens/bee-management/HiveRegistration';
import QRCodes from '../screens/bee-management/QRCodes';
import { Settings } from '../screens/user';
import { Profile } from '../screens/user';
import { MainAppStackParams } from '../utils/Types';

const Stack = createNativeStackNavigator<MainAppStackParams>();

const MainAppNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="History" component={ActionHistory} />
    <Stack.Screen name="Data" component={AllHivesData} />
    <Stack.Screen name="Map" component={Map} />
    <Stack.Screen name="HiveData" component={HiveData} />
    <Stack.Screen name="HiveRegistration" component={HiveRegistration} />
    <Stack.Screen name="QRCodes" component={QRCodes} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

export default MainAppNavigator;
