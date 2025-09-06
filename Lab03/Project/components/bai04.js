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
import OtpInputs from 'react-native-otp-inputs';
import OTPTextView from 'react-native-otp-textinput';

const Bai04 = () => {
  const [text, onChangeText] = React.useState('Email');
  return (
    <LinearGradient
      colors={['#89f7fe', '#66a6ff']}
      style={[styles.container, { flex: 1 }]}>
      <View style={[styles.container, { flex: 1 }]}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{ fontSize: 50, textAlign: 'center', fontWeight: 'bold' }}>
            Code
          </Text>
        </View>

        <View style={{ flex: 0.5 }}>
          <Text
            style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>
            Vierification
          </Text>
        </View>
        <View style={{ flex: 0.1 }}>
          <Text
            style={{ fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>
            Enter ontime password sent on
          </Text>
          <Text
            style={{ fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>
            ++849092605798
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <OTPTextView
            inputCount={6}
            handleTextChange={(code) => console.log(code)}
            containerStyle={{ marginTop: 20 }}
            textInputStyle={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'black',
              backgroundColor: 'white'
            }}
          />
        </View>

        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
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
            <Text style={{ color: 'white', fontSize: 16 }}>Verifi Code</Text>
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
});

export default Bai04;