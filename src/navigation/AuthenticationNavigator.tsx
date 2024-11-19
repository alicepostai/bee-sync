import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/authentication/Home';
import Login from '../screens/authentication/Login';
import SignUp from '../screens/authentication/SignUp';
import PasswordRecovery from '../screens/authentication/PasswordRecovery';
import { AuthenticationStackParams } from '../utils/Types';

const Stack = createNativeStackNavigator<AuthenticationStackParams>();

const AuthenticationNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
  </Stack.Navigator>
);

export default AuthenticationNavigator;
