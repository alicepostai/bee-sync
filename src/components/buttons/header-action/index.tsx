import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderActionButtonProps, RootStackParams } from '../../../../types';
import { colors } from '../../../utils/Colors';
import Styles from '../../../utils/Styles';

const HeaderActionButton: React.FC<HeaderActionButtonProps> = ({
  iconName,
  accessibilityLabel,
  screenName,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handlePress = () => {
    navigation.navigate('mainApp', { screen: screenName });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={Styles.headerButton}
      accessibilityLabel={accessibilityLabel}
    >
      <Ionicons name={iconName} size={24} color={colors.honey} />
    </TouchableOpacity>
  );
};

export default HeaderActionButton;
