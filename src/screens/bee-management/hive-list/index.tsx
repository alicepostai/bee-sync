import React, { FC, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParams, RootStackParams } from '../../../../types';
import { colors } from '../../../utils/Colors';

const HiveList: FC<NativeStackScreenProps<BottomTabParams, 'hiveList'>> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [swarms, setSwarms] = useState<
    { id: string; name: string; species: string; captureDate: string; imageUrl: string | null }[]
  >([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchSwarms = async () => {
      // Simulação: substituir pela chamada ao banco de dados
      const response = [
        { id: '1', name: 'Manduri', species: 'Melipona torrida', captureDate: '04 set. 2024', imageUrl: null },
        { id: '2', name: 'Abelha-cachorro', species: 'Trigona braueri', captureDate: '11 set. 2024', imageUrl: null },
      ];
      setSwarms(response);
    };
    fetchSwarms();
  }, []);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const filteredSwarms = swarms.filter(
    (swarm) =>
      swarm.name.toLowerCase().includes(searchText.toLowerCase()) ||
      swarm.species.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderSwarmItem = ({
    item,
  }: {
    item: { id: number; name: string; species: string; captureDate: string; imageUrl: string | null };
  }) => (
    <View style={styles.swarmCard}>
      <TouchableOpacity onPress={() => navigation.navigate('mainApp', {screen: 'hive', params: { id: item.id }})} style={styles.swarmCard}>
        <Image
          source={item.imageUrl ? { uri: item.imageUrl } : require('../../../../assets/google.png')}
          style={styles.swarmImage}
        />
        <View style={styles.swarmInfo}>
          <Text style={styles.swarmName}>{item.name}</Text>
          <Text style={styles.swarmDetails}>Espécie: {item.species}</Text>
          <Text style={styles.swarmDetails}>Captura em {item.captureDate}</Text>
          <Text style={styles.swarmCode}>#{item.id}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const handleAddSwarm = () => {
    navigation.navigate('mainApp', { screen: 'hiveRegistration' });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Enxames"
        value={searchText}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredSwarms}
        keyExtractor={(item) => item.id}
        renderItem={renderSwarmItem}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddSwarm}>
          <Ionicons name="add" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HiveList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 80,
  },
  swarmCard: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  swarmImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  swarmInfo: {
    flex: 1,
  },
  swarmName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  swarmDetails: {
    fontSize: 14,
    color: '#666',
  },
  swarmCode: {
    fontSize: 12,
    color: '#999',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButton: {
    backgroundColor: colors.honey,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
