import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const products = [
  { id: '1', name: 'Sản phẩm 1', price: '100k' },
  { id: '2', name: 'Sản phẩm 2', price: '200k' },
  { id: '3', name: 'Sản phẩm 3', price: '300k' },
];

function ProductsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 15,
              marginVertical: 5,
              backgroundColor: '#f2f2f2',
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('ProductDetails', { id: item.id })
            }
          >
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            <Text style={{ color: 'gray' }}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function FavoritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Danh sách sản phẩm đã lưu</Text>
    </View>
  );
}

function ProductDetailsScreen({ route }) {
  const { id } = route.params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Không tìm thấy sản phẩm!</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{product.name}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>{product.price}</Text>
      <Text style={{ marginTop: 20 }}>Chi tiết sản phẩm ID: {id}</Text>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ title: 'Chi tiết sản phẩm' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
