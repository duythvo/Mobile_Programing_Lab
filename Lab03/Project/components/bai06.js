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

const Bai06 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [secure, setSecure] = useState(true);
  const [gender, setGender] = useState(null);

  return (
    <LinearGradient
      colors={['#e6f9f0', '#e6f9f0']}
      style={[styles.container, { flex: 1 }]}>
      <View style={[styles.container, { flex: 1 }]}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.title}>LOGIN</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.passwordWrapper}>
            <TextInput
              style={[styles.passwordWrapper, { flex: 1, borderWidth: 0 }]}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secure}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Ionicons
                name={secure ? 'eye-off' : 'eye'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Birthday"
            value={birthday}
            onChangeText={setBirthday}
          />
        </View>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={styles.genderOption}
            onPress={() => setGender('Male')}>
            <Ionicons
              name={gender === 'Male' ? 'radio-button-on' : 'radio-button-off'}
              size={24}
              color="black"
            />
            <Text style={styles.genderText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.genderOption}
            onPress={() => setGender('Female')}>
            <Ionicons
              name={
                gender === 'Female' ? 'radio-button-on' : 'radio-button-off'
              }
              size={24}
              color="black"
            />
            <Text style={styles.genderText}>Female</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Pressable
            style={styles.loginBtn}
            onPress={() => alert('Pressed Login!')}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              REGISTER
            </Text>
          </Pressable>
          <Text style={{ fontSize: 16, marginTop: 5 }}>
            When you agree to terms and conditions
          </Text>
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
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    margin: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#d9ead3',
  },
  passwordWrapper: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    width: 300,
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: '#d9ead3',
  },
  loginBtn: {
    backgroundColor: '#c75d46',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    width: 300,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  genderText: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default Bai06;
