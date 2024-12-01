import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../utils/Colors';
import Styles from '../../../utils/Styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../../types';

const QRCodesButton: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('mainApp', { screen: 'qrCodes' })}
      style={Styles.headerButton}
      accessibilityLabel="Lista de QR Codes"
    >
      <Ionicons name="qr-code-outline" size={24} color={colors.honey} />
    </TouchableOpacity>
  );
};

export default QRCodesButton;
