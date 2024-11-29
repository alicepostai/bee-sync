import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC, useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { colors } from '../../../utils/Colors';
import { fonts } from '../../../utils/Fonts';
import { AuthStackParams } from '../../../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const SignupScreen: FC<NativeStackScreenProps<AuthStackParams, 'signUp'>> = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Senha obrigatória'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'As senhas devem corresponder')
      .required('Confirmação de senha obrigatória'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log('Form values', values);
        //add logica de cadastro
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
            <Ionicons name={'arrow-back-outline'} color={colors.primary} size={25} />
          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text style={styles.headingText}>Faça seu</Text>
            <Text style={styles.headingText}>cadastro</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Ionicons name={'mail-outline'} size={30} color={colors.secondary} />
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
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <View style={styles.inputContainer}>
              <SimpleLineIcons name={'lock'} size={30} color={colors.secondary} />
              <TextInput
                style={styles.textInput}
                placeholder="Insira sua senha"
                placeholderTextColor={colors.secondary}
                secureTextEntry={secureEntry}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
                <SimpleLineIcons name={'eye'} size={20} color={colors.secondary} />
              </TouchableOpacity>
            </View>
            {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <View style={styles.inputContainer}>
              <SimpleLineIcons name={'lock'} size={30} color={colors.secondary} />
              <TextInput
                style={styles.textInput}
                placeholder="Confirme sua senha"
                placeholderTextColor={colors.secondary}
                secureTextEntry={secureEntry}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
              <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
                <SimpleLineIcons name={'eye'} size={20} color={colors.secondary} />
              </TouchableOpacity>
            </View>
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity style={styles.signUpButtonWrapper} onPress={() => handleSubmit()}>
              <Text style={styles.signUpText}>Cadastrar</Text>
            </TouchableOpacity>

            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>OU</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButtonContainer}>
              <Image source={require('../../../assets/google.png')} style={styles.googleImage} />
              <Text style={styles.googleText}>Continuar com o Google</Text>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
              <Text style={styles.accountText}>Já possui uma conta?</Text>
              <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignupScreen;

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
    marginLeft: 20,
    marginTop: -8,
  },
  signUpButtonWrapper: {
    backgroundColor: colors.honey,
    borderRadius: 100,
    marginTop: 20,
  },
  signUpText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
    padding: 10,
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
  googleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 18,
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
  loginText: {
    color: colors.honey,
    fontFamily: fonts.Bold,
  },
});
