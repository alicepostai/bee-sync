import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/Colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UserStackParams } from '../../utils/Types';
import Styles from '../../utils/Styles';

const SettingsButton: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<UserStackParams>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Settings')}
      style={Styles.headerButton}
      accessibilityLabel="Botão de Configurações"
    >
      <Ionicons name="settings-outline" size={24} color={colors.honey} />
    </TouchableOpacity>
  );
};

export default SettingsButton;
