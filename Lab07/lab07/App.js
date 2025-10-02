import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const vehicles = [
  {
    id: '1',
    name: 'Pina Mountain',
    type: 'Mountain',
    brand: 'Pina',
    model: 'Mountain X',
    year: 2023,
    price: 1350,
    plateNumber: 'ABC123',
    status: 'available',
    imageUrl:
      'https://just-bikes.de/cdn/shop/files/29-27-5-zoll-herren-mountainbike-mtb-hardtail-apolon-pro-schwarz-neon-1_0159121f-113a-4de4-8d45-1a50e14090fb.jpg?v=1730426479&width=1300',
    favorite: true,
  },
  {
    id: '2',
    name: 'Pinarello',
    type: 'Roadbike',
    brand: 'Pinarello',
    model: 'Road X',
    year: 2024,
    price: 1800,
    plateNumber: 'XYZ456',
    status: 'rented',
    imageUrl:
      'https://bizweb.dktcdn.net/100/412/747/products/xe-dap-dua-magicbros-s600-5.jpg?v=1731484215820',
    favorite: false,
  },
];

function Screen01({ navigation }) {
  return (
    <View style={styles.screen01Container}>
      <Text style={styles.title}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://bizweb.dktcdn.net/100/412/747/products/xe-dap-dua-magicbros-s600-5.jpg?v=1731484215820',
          }}
          style={styles.screen01Image}
        />
      </View>
      <Text style={styles.shopTitle}>POWER BIKE SHOP</Text>
      <TouchableOpacity
        style={styles.getStartedBtn}
        onPress={() => navigation.navigate('Screen02')}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

function Screen02({ navigation }) {
  const [filter, setFilter] = useState('All');

  const filteredVehicles =
    filter === 'All' ? vehicles : vehicles.filter((v) => v.type === filter);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 10 }}>
        The world's Best Bike
      </Text>

      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        {['All', 'Roadbike', 'Mountain'].map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => setFilter(type)}
            style={[
              styles.filterBtn,
              filter === type && styles.filterBtnActive,
            ]}>
            <Text
              style={[styles.filterText, filter === type && { color: 'pink' }]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredVehicles}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Screen03', { vehicle: item })}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ color: 'orange', fontWeight: '600' }}>
              ${item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function Screen03({ route }) {
  const { vehicle } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Image
        source={{ uri: vehicle.imageUrl }}
        style={{ width: '100%', height: 200, marginBottom: 16 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{vehicle.name}</Text>
      <Text style={{ fontSize: 18, marginVertical: 8 }}>${vehicle.price}</Text>
      <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Description</Text>
      <Text>
        This bike is a {vehicle.type} type, brand {vehicle.brand}, model{' '}
        {vehicle.model}, year {vehicle.year}. It is currently {vehicle.status}.
      </Text>
      <TouchableOpacity style={styles.addToCardBtn}>
        <Text
          style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          Add to card
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen01"
        screenOptions={{
          headerShown: true,
          headerTitle: '',
          headerBackTitleVisible: false, 
        }}>
        <Stack.Screen
          name="Screen01"
          component={Screen01}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen01Container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
    fontSize: 16,
  },
  imageContainer: {
    backgroundColor: '#f9dada',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  screen01Image: {
    width: 292,
    height: 270,
  },
  shopTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  getStartedBtn: {
    backgroundColor: '#e24242',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 10,
  },
  getStartedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  filterBtn: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 6,
    marginRight: 8,
  },
  filterBtnActive: {
    borderColor: 'pink',
  },
  filterText: {
    color: 'gray',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#FFF3E5',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: '48%',
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
  addToCardBtn: {
    backgroundColor: '#E24242',
    padding: 12,
    marginTop: 20,
    borderRadius: 25,
  },
});
