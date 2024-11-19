// @ts-nocheck
import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from '../../utils/Fonts';
import { ComboBoxProps, ListItem } from '../../types';


const ComboBox : FC<ComboBoxProps> = ({ list, placeholder, iconName }) => {
  const [selectedItem, setSelecteItem] = useState<ListItem | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleOpenModal = () => {
    console.log({ list, placeholder });
    setIsModalVisible(true);
  };

  const handleSelectItem : (item: any) => void = (item) => {
    setSelecteItem(item);
    setIsModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleOpenModal} style={styles.inputContainer}>
        <Ionicons
          name={iconName}
          size={25}
          color={colors.secondary}
        />
        <TextInput
          style={styles.textInput}
          editable={false}
          placeholder={placeholder}
          placeholderTextColor={colors.secondary}
          value={selectedItem ? selectedItem.name : ''}
        />
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>

          <FlatList
            data={list}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleSelectItem(item)}
              >
                <View style={styles.row}>
                  {item.imageUrl && (
                    <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
                  )}
                  <View style={styles.textContainer}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    {item.scientificName && (
                      <Text style={styles.itemSubText}>{item.scientificName}</Text>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />

        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    flex: 1,
  },
  itemSubText: {
    fontSize: 12,
    color: colors.primary,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
  },
});

export default ComboBox;
