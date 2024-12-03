import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { ColorValue, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BottomTabParams } from '../../../types';
import ActionHistory from '../../screens/bee-management/action-history';
import GeneralData from '../../screens/bee-management/general-data';
import HiveList from '../../screens/bee-management/hive-list';
import Map from '../../screens/bee-management/map';
import Profile from '../../screens/user/profile';
import Styles from '../../utils/Styles';
import { colors } from '../../utils/Colors';
import HeaderActionButton from '../../components/buttons/header-action';

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
          headerRight: HeaderRight,
        })}>

        <Tab.Screen name="hiveList" component={HiveList} options={{ title: 'Enxames' }} />
        <Tab.Screen name="generalData" component={GeneralData} options={{ title: 'Dados' }} />
        <Tab.Screen name="map" component={Map} options={{ title: 'Mapa' }} />
        <Tab.Screen name="history" component={ActionHistory} options={{ title: 'Histórico' }} />
        <Tab.Screen name="profile" component={Profile} options={{ title: 'Perfil'}} />
      </Tab.Navigator>
    );
};

const HeaderRight: React.FC = () => {
  return (
    <View style={Styles.headerContainer}>
      <HeaderActionButton
        iconName="qr-code-outline"
        accessibilityLabel="Lista de QR Codes"
        screenName="qrCodes"
      />
      <HeaderActionButton
        iconName="settings-outline"
        accessibilityLabel="Botão de Configurações"
        screenName="appSettings"
      />
    </View>
  );
};

const getTabBarIcon = ({route, size, color}:iconProps) => {
    let iconName = '';

    if (route.name === 'hiveList') {
      iconName = 'list';
    } else if (route.name === 'generalData') {
      iconName = 'bar-chart-outline';
    } else if (route.name === 'map') {
      iconName = 'map-outline';
    } else if (route.name === 'history') {
      iconName = 'receipt-outline';
    } else if (route.name === 'profile') {
      iconName = 'person-outline';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
};

  type iconProps = {route: {name: String}, size: number, color: ColorValue | number | undefined};

export default BottomTab;
