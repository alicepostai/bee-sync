import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainAppParams } from '../../../types';
import AppSettings from '../../screens/user/app-settings';

import QRCodes from '../../screens/bee-management/qr-codes';
import HiveRegistration from '../../screens/bee-management/hive-registration';
import Hive from '../../screens/bee-management/hive';

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
