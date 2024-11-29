import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/authentication/home';
import Login from '../../screens/authentication/login';
import PasswordRecovery from '../../screens/authentication/password-recovery';
import SignupScreen from '../../screens/authentication/sign-up';
import { AuthStackParams } from '../../../types';

const Authentication:FC = () => {
    const Stack = createNativeStackNavigator<AuthStackParams>();

    return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignupScreen} />
        <Stack.Screen name="passwordRecovery" component={PasswordRecovery} />
    </Stack.Navigator>
    );
};

export default Authentication;
