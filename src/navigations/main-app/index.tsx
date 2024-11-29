import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainAppParams } from '../../../types';
import { HiveRegistration, QRCodes } from '../../screens/bee-management';
import AppSettings from '../../screens/user/app-settings';
import Hive from '../../screens/bee-management/Hive';

const MainApp:FC = () => {
    const Stack = createNativeStackNavigator<MainAppParams>();

    return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="hive" component={Hive} />
        <Stack.Screen name="hiveRegistration" component={HiveRegistration} />
        <Stack.Screen name="qrCodes" component={QRCodes} />
        <Stack.Screen name="appSettings" component={AppSettings} />
    </Stack.Navigator>
    );
};

export default MainApp;
