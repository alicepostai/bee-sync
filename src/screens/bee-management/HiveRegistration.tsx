import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ComboBox from '../../components/forms/ComboBox';
import { colors } from '../../utils/Colors';
import { species } from '../../constants/lists/BeeSpeciesList';
import { states } from '../../constants/lists/States';
import { hiveOrigin } from '../../constants/lists/HiveOrigin';
import { boxType } from '../../constants/lists/BoxType';
import { fonts } from '../../utils/Fonts';

const HiveRegistration: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const SignUpSchema = Yup.object().shape({
    species: Yup.string().required('Espécie é obrigatória'),
    state: Yup.string().required('Estado de origem é obrigatório'),
    boxType: Yup.string().required('Modelo de caixa é obrigatório'),
    captureDate: Yup.date().required('Data de captura/compra é obrigatória'),
    hiveOrigin: Yup.string().required('Origem do enxame é obrigatória'),
  });

  return (
    <Formik
      initialValues={{
        species: '',
        state: '',
        boxType: '',
        location: '',
        captureDate: '',
        hiveOrigin: '',
        code: '',
        description: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        console.log('Form values', values);
        // Adicionar no banco
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButtonWrapper}
            onPress={handleGoBack}
          >
            <Ionicons
              name="arrow-back-outline"
              color={colors.primary}
              size={25}
            />
          </TouchableOpacity>

          <Text style={styles.headingText}>Cadastrar um enxame</Text>

          <ComboBox
            list={species}
            placeholder="Selecione a espécie"
            iconName="leaf-outline"
          />
          {errors.species && touched.species && (
            <Text style={styles.errorText}>{errors.species}</Text>
          )}

          <ComboBox
            list={states}
            placeholder="Selecione o estado de origem"
            iconName="location-outline"
          />
          {errors.state && touched.state && (
            <Text style={styles.errorText}>{errors.state}</Text>
          )}

          <ComboBox
            list={boxType}
            placeholder="Selecione o modelo de caixa"
            iconName="cube-outline"
          />
          {errors.boxType && touched.boxType && (
            <Text style={styles.errorText}>{errors.boxType}</Text>
          )}

          <ComboBox
            list={hiveOrigin}
            placeholder="Selecione a origem do enxame"
            iconName="egg-outline"
          />
          {errors.hiveOrigin && touched.hiveOrigin && (
            <Text style={styles.errorText}>{errors.hiveOrigin}</Text>
          )}

          <TouchableOpacity
            style={styles.inputContainer}
            onPress={() =>
              console.log('Abrir mapa para seleção de localização')
            }
          >
            <Ionicons
              name="map-outline"
              size={25}
              color={colors.secondary}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Selecione o local da caixa"
              placeholderTextColor={colors.secondary}
              editable={false}
              value={values.location}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputContainer}
            onPress={() => console.log('Abrir calendário')}
          >
            <Ionicons
              name="calendar-outline"
              size={25}
              color={colors.secondary}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Selecione a data de captura/compra"
              placeholderTextColor={colors.secondary}
              editable={false}
              value={values.captureDate}
            />
          </TouchableOpacity>
          {errors.captureDate && touched.captureDate && (
            <Text style={styles.errorText}>{errors.captureDate}</Text>
          )}

          <View style={styles.inputContainer}>
            <Ionicons
              name="barcode-outline"
              size={25}
              color={colors.secondary}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Código do enxame (opcional)"
              placeholderTextColor={colors.secondary}
              onChangeText={handleChange('code')}
              onBlur={handleBlur('code')}
              value={values.code}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons
              name="document-text-outline"
              size={25}
              color={colors.secondary}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Descrição (opcional)"
              placeholderTextColor={colors.secondary}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />
          </View>

          <TouchableOpacity
            style={styles.signUpButtonWrapper}
            onPress={() => handleSubmit()}>
            <Text style={styles.signUpText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default HiveRegistration;

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
    fontSize: 28,
    color: colors.honey,
    fontFamily: fonts.SemiBold,
    marginBottom: 20,
    marginTop: 20,
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
});
