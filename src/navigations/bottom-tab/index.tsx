import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { ColorValue, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BottomTabParams } from '../../../types';
import QRCodesButton from '../../components/buttons/qr-codes';
import SettingsButton from '../../components/buttons/settings';
import { ActionHistory, HiveList, Map } from '../../screens/bee-management';
import Profile from '../../screens/user/profile';
import { colors } from '../../utils/Colors';
import Styles from '../../utils/Styles';
import GeneralData from '../../screens/bee-management/general-data';

const BottomTab:FC = () => {
    const Tab = createBottomTabNavigator<BottomTabParams>();

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => getTabBarIcon({route, color: colors.honey, size: 28}),
          tabBarActiveTintColor: colors.honey,
          tabBarInactiveTintColor: 'gray',
          tabBarLabel: () => null,
          headerTintColor: colors.honey,
          headerRight: () => (
            <View style={Styles.headerContainer}>
                <QRCodesButton />
                <SettingsButton />
            </View>
          ),
        })}>

        <Tab.Screen name="hiveList" component={HiveList} options={{ title: 'Enxames' }} />
        <Tab.Screen name="generalData" component={GeneralData} options={{ title: 'Dados' }} />
        <Tab.Screen name="map" component={Map} options={{ title: 'Mapa' }} />
        <Tab.Screen name="history" component={ActionHistory} options={{ title: 'Histórico' }} />
        <Tab.Screen name="profile" component={Profile} options={{ title: 'Perfil'}} />
      </Tab.Navigator>
    );
};

const getTabBarIcon = ({route, color, size}:iconProps) => {
    let iconName = '';

    if (route.name === 'HiveList') {
      iconName = 'list';
    } else if (route.name === 'Data') {
      iconName = 'bar-chart-outline';
    } else if (route.name === 'Map') {
      iconName = 'map-outline';
    } else if (route.name === 'History') {
      iconName = 'receipt-outline';
    } else if (route.name === 'Profile') {
      iconName = 'person-outline';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
};

  type iconProps = {route: {name: String}, color: ColorValue | number | undefined, size: number};

export default BottomTab;
