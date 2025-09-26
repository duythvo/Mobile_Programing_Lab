import * as React from 'react';
import { View, Text, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Đây là màn hình Home</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Thông tin User</Text>
      <Text>Tên: Nguyễn Văn A</Text>
      <Text>Email: user@example.com</Text>
    </View>
  );
}

function SettingsScreen() {
  const [isEnabled1, setIsEnabled1] = React.useState(false);
  const [isEnabled2, setIsEnabled2] = React.useState(true);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Cài đặt</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15,
        }}
      >
        <Text>Tùy chọn 1</Text>
        <Switch
          value={isEnabled1}
          onValueChange={() => setIsEnabled1(!isEnabled1)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15,
        }}
      >
        <Text>Tùy chọn 2</Text>
        <Switch
          value={isEnabled2}
          onValueChange={() => setIsEnabled2(!isEnabled2)}
        />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
