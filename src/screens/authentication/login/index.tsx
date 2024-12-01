import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { colors } from '../../../utils/Colors';
import { fonts } from '../../../utils/Fonts';
import { AuthStackParams, RootStackParams } from '../../../../types';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

const Login: FC<NativeStackScreenProps<AuthStackParams, 'login'>> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignup = () => {
    navigation.navigate('authentication', { screen: 'signUp' });
  };

  const handleForgotPassword = () => {
    navigation.navigate('authentication', { screen: 'passwordRecovery' });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Senha é obrigatória'),
  });

  const handleLogin = () => {
    //validar depois qnd tiver firebase
    navigation.navigate('bottomTab', { screen: 'hiveList' });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Que bom ter</Text>
        <Text style={styles.headingText}>você de volta!</Text>
      </View>

      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Ionicons
                name={'mail-outline'}
                size={30}
                color={colors.secondary}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Insira seu e-mail"
                placeholderTextColor={colors.secondary}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <View style={styles.inputContainer}>
              <SimpleLineIcons
                name={'lock'}
                size={30}
                color={colors.secondary}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Insira sua senha"
                placeholderTextColor={colors.secondary}
                secureTextEntry={secureEntry}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <TouchableOpacity
                onPress={() => {
                  setSecureEntry(prev => !prev);
                }}>
                <SimpleLineIcons
                  name={'eye'}
                  size={20}
                  color={colors.secondary}
                />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButtonWrapper}
              onPress={() => handleSubmit()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>OU</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButtonContainer}>
              <Image
                source={require('../../../../assets/google.png')}
                style={styles.googleImage}
              />
              <Text style={styles.googleText}>Continuar com o Google</Text>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
              <Text style={styles.accountText}>Não possui uma conta?</Text>
              <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.signupText}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    color: colors.primary,
    fontFamily: fonts.SemiBold,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -5,
    marginBottom: 10,
    fontFamily: fonts.Regular,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: colors.honey,
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  googleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colors.primary,
    fontFamily: fonts.Regular,
  },
  signupText: {
    color: colors.honey,
    fontFamily: fonts.Bold,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 12,
    color: '#000',
    paddingHorizontal: 10,
  },
});
