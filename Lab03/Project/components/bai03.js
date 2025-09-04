import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Bai03 = () => {
  const [text, onChangeText] = React.useState('Email');
  return (
    <LinearGradient
      colors={['#89f7fe', '#66a6ff']}
      style={[styles.container, { flex: 1 }]}>
      <View style={[styles.container, { flex: 1 }]}>
        <View
          style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name="lock-closed" size={200} color="black" />
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>
            Forget
          </Text>
          <Text
            style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>
            Password
          </Text>
        </View>
        <View style={{ flex: 0.5 }}>
          <Text
            style={{ fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>
            Provide your account’s email for which you want to reset your
            password
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>

        <View
          style={{
            flex: 1, alignItems: 'center'
          }}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: 'blue',
                padding: 12,
                borderRadius: 8,
                alignItems: 'center',
                minWidth: 100,
                width: 300,
              },
            ]}
            onPress={() => alert('Pressed 1!')}>
            <Text style={{ color: 'white', fontSize: 16 }}>Next</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Bai03;
