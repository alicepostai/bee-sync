import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ComboBox from '.';
import {ListItem, TextComboBoxProps} from '../../../types';

const TextComboBox: FC<TextComboBoxProps> = ({list, placeholder, iconName}) => {
  const renderItem = (item: ListItem) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <ComboBox
      list={list}
      placeholder={placeholder}
      iconName={iconName}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TextComboBox;
