import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import { colors } from '../utils/Colors';
import SettingsButton from '../components/buttons/SettingsButton';
import QRCodesButton from '../components/buttons/QRCodesButton';
import MainAppNavigator from './MainAppNavigator';

const renderTabBarIcon = ({ route, color, size }: { route: any; color: string; size: number }) => {
  return <TabBarIcon routeName={route.name} color={color} size={size} />;
};

const HeaderRight = () => (
  <>
    <QRCodesButton />
    <SettingsButton />
  </>
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: (props) => renderTabBarIcon({ ...props, route }),
      tabBarActiveTintColor: colors.honey,
      tabBarInactiveTintColor: 'gray',
      tabBarLabel: () => null,
      headerRight: HeaderRight,
    })}
  >
    <Tab.Screen name="HiveList" component={MainAppNavigator} options={{ title: 'Enxames' }} />
    <Tab.Screen name="Data" component={MainAppNavigator} options={{ title: 'Dados' }} />
    <Tab.Screen name="Map" component={MainAppNavigator} options={{ title: 'Mapa' }} />
    <Tab.Screen name="History" component={MainAppNavigator} options={{ title: 'Histórico' }} />
    <Tab.Screen name="Profile" component={MainAppNavigator} options={{ title: 'Perfil' }} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
