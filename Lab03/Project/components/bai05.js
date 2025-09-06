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

const Bai05 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

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
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Pressable
            style={styles.loginBtn}
            onPress={() => alert('Pressed Login!')}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              LOGIN
            </Text>
          </Pressable>
        </View>

        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.smallText}>
            When you agree to terms and conditions
          </Text>
          <TouchableOpacity onPress={() => alert('Forgot Password')}>
            <Text style={styles.forgotText}>For got your password?</Text>
          </TouchableOpacity>
          <Text style={styles.smallText}>Or login with</Text>

          <View style={styles.socialContainer}>
            <Pressable
              style={[styles.socialBtn, { backgroundColor: '#3b5998' }]}>
              <Text style={styles.socialText}>f</Text>
            </Pressable>
            <Pressable
              style={[styles.socialBtn, { backgroundColor: '#1877f2' }]}>
              <Text style={styles.socialText}>Z</Text>
            </Pressable>
            <Pressable
              style={[
                styles.socialBtn,
                { backgroundColor: 'white', borderWidth: 1 },
              ]}>
              <Text style={[styles.socialText, { color: '#db4437' }]}>G</Text>
            </Pressable>
          </View>
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
  smallText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 4,
  },
  forgotText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'blue',
    marginVertical: 6,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  socialBtn: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 4,
  },
  socialText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Bai05;
