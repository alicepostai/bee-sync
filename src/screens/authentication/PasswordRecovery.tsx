import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import { colors } from '../../utils/Colors';
  import { fonts } from '../../utils/Fonts';

  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { useNavigation } from '@react-navigation/native';

  const PasswordRecovery = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
      navigation.goBack();
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
          <Text style={styles.headingText}>Esqueceu</Text>
          <Text style={styles.headingText}>sua senha?</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name={'mail-outline'} size={30} color={colors.secondary} />
            <TextInput
              style={styles.textInput}
              placeholder="Insira seu e-mail"
              placeholderTextColor={colors.secondary}
              keyboardType="email-address"
            />
          </View>

          <TouchableOpacity style={styles.recoveryButtonWrapper}>
            <Text style={styles.recoveryText}>Enviar e-mail de recuperação</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  };

  export default PasswordRecovery;

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
    recoveryButtonWrapper: {
      backgroundColor: '#DAA520',
      borderRadius: 100,
      marginTop: 20,
    },
    recoveryText: {
      color: colors.white,
      fontSize: 20,
      fontFamily: fonts.SemiBold,
      textAlign: 'center',
      padding: 10,
    },
  });
