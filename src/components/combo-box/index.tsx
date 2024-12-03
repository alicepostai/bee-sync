import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils/Colors';
import {BaseComboBoxProps} from '../../../types';
import styles from './styles';

const ComboBox = <T extends {}>({
  list,
  placeholder,
  iconName,
  renderItem,
  keyExtractor,
}: BaseComboBoxProps<T>) => {
  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleOpenModal = () => {
    console.log({list, placeholder});
    setIsModalVisible(true);
  };

  const handleSelectItem = (item: T) => {
    setSelectedItem(item);
    setIsModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleOpenModal} style={styles.inputContainer}>
        <Ionicons name={iconName} size={25} color={colors.secondary} />
        <TextInput
          style={styles.textInput}
          editable={false}
          placeholder={placeholder}
          placeholderTextColor={colors.secondary}
          value={selectedItem ? (selectedItem as any).name : ''}
        />
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={() => setIsModalVisible(false)}
        animationIn="pulse"
        animationOut="slideOutDown">
        <View style={styles.modalContainer}>
          <FlatList
            data={list}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleSelectItem(item)}>
                {renderItem(item)}
              </TouchableOpacity>
            )}
            keyExtractor={item => keyExtractor(item)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ComboBox;
