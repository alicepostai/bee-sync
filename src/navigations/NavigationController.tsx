import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home, Login, SignUp, PasswordRecovery } from '../screens/authentication';
import { HiveList, AllHivesData, ActionHistory, HiveRegistration, QRCodes, Map } from '../screens/bee-management';
import { Profile } from '../screens/user';
import { colors } from '../utils/Colors';
import Styles from '../utils/Styles';
import AppSettings from '../screens/user/AppSettings';
import { BottomTabParams, RootStackParams } from '../../types';
import Hive from '../screens/bee-management/Hive';

const NavigationController = () => {
    const Stack = createNativeStackNavigator<{Root: any; Authentication: any; BottomTab: any}>();

    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Authentication">
            <Stack.Screen name="Authentication" component={Authentication} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="Root" component={Root} />
          </Stack.Navigator>
        </NavigationContainer>
      );
};


const getTabBarIcon = (route, color, size) => {
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

const SettingsButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('User', { screen: 'AppSettings' })}
      style={Styles.headerButton}
    >
      <Ionicons name="settings-outline" size={24} color= {colors.honey} />
    </TouchableOpacity>
  );
};

const QRCodesButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Root', { screen: 'QRCodes' })}
      style={Styles.headerButton}
    >
      <Ionicons name="qr-code-outline" size={24} color={colors.honey} />
    </TouchableOpacity>
  );
};

const BottomTab = () => {
    const Tab = createBottomTabNavigator<BottomTabParams>();

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => getTabBarIcon(route, colors.honey, 28),
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
        })}
      >
        <Tab.Screen name="HiveList" component={HiveList} options={{ title: 'Enxames' }} />
        <Tab.Screen name="Data" component={AllHivesData} options={{ title: 'Dados' }} />
        <Tab.Screen name="Map" component={Map} options={{ title: 'Mapa' }} />
        <Tab.Screen name="History" component={ActionHistory} options={{ title: 'Histórico' }} />
        <Tab.Screen name="Profile" component={Profile} options={{ title: 'Perfil'}} />
      </Tab.Navigator>
    );
}

const Authentication = () => {
    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
    </Stack.Navigator>
    );
};

const Root = () => {
    const Stack = createNativeStackNavigator<RootStackParams>();

    return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="history" component={ActionHistory} />
        <Stack.Screen name="data" component={AllHivesData} />
        <Stack.Screen name="map" component={Map} />
        <Stack.Screen name="Hive" component={Hive} />
        <Stack.Screen name="HiveRegistration" component={HiveRegistration} />
        <Stack.Screen name="QRCodes" component={QRCodes} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AppSettings" component={AppSettings} />
    </Stack.Navigator>
    );
};

export default NavigationController;

const styles = StyleSheet.create({});
