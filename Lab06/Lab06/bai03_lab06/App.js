import * as React from 'react';
import { Text, View, Button, FlatList, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Danh sach</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Text> {item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>📄 Details Screen</Text>
    </View>
  );
}

function SearchScreen() {
  const [inputValue, setInputValue] = React.useState('');

  const handleAdd = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập thông tin');
      return;
    }
    Alert.alert('Thông tin vừa nhập', inputValue);
    setInputValue('');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>🔍 Search Screen</Text>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Nhập thông tin..."
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '100%',
          paddingHorizontal: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />
      <Button title="Thêm" onPress={handleAdd} />
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>🔔 Notifications Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  const userInfo = {
    name: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    phone: '0123 456 789',
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
      }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>👤 Profile Screen</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Họ và tên: {userInfo.name}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Email: {userInfo.email}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Số điện thoại: {userInfo.phone}
      </Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />

        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
