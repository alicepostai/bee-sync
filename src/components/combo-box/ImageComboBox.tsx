import React, {FC} from 'react';
import ComboBox from '.';
import {ImageComboBoxProps, BeeSpecies} from '../../../types';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ImageComboBox: FC<ImageComboBoxProps> = ({list, placeholder, iconName}) => {
  const renderItem = (item: BeeSpecies) => (
    <View style={styles.item}>
      <Image source={{uri: item.imageUrl}} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemSubText}>{item.scientificName}</Text>
      </View>
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

export default ImageComboBox;
