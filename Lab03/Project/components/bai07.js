import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Bai07 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <LinearGradient
      colors={['#FFD54F', '#FFB300']}
      style={[styles.container, { flex: 1 }]}
    >
      <View style={[styles.container, { flex: 1 }]}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.title}>LOGIN</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail" size={20} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed" size={20} color="black" />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secure}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Ionicons
                name={secure ? 'eye-off' : 'eye'}
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
          <Pressable
            style={styles.loginBtn}
            onPress={() => alert('Pressed Login!')}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              LOGIN
            </Text>
          </Pressable>
          <Text style={styles.smallText}>CREATE ACCOUNT</Text>
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
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    width: 300,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#d9ead3',
    height: 50,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  loginBtn: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    width: 300,
  },
  smallText: {
    marginTop: 11,
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 4,
    fontWeight: 'bold',
  },
});

export default Bai07;
