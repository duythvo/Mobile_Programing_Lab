import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Bai01 = () => {
  const [soLuong, setSoLuong] = useState(1);
  const gia = 141800;
  const total = gia * soLuong;

  const tangGia = () => setSoLuong(soLuong + 1);
  const giamGia = () => soLuong > 1 && setSoLuong(soLuong - 1);
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
          contentFit="cover"
          transaction={1000}
        />
        <View>
          <Text>Nguyen ham tich phan va ung dung</Text>
          <Text style={{ marginTop: 5, fontWeight: 'bold', fontSize: 15 }}>
            Cung cap boi Tiki trading
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontWeight: 'bold',
              fontSize: 15,
              color: 'red',
            }}>
            {total}
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontWeight: 'bold',
              fontSize: 12,
              color: 'gray',
              textDecorationLine: 'line-through',
            }}>
            {gia}
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 4 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'gray',
                  paddingHorizontal: 5,
                  borderRadius: 5,
                }}
                onPress={giamGia}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{soLuong}</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'gray',
                  paddingHorizontal: 5,
                  borderRadius: 5,
                }}
                onPress={tangGia}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 5 }}>
              <Text style={{ color: 'blue' }}>Mua sau</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            gap: 20,
          }}>
          <Text>Ma giam gia uu dai</Text>
          <Text style={{ color: 'blue', fontWeight: 'bold' }}>Xem tai day</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 50, alignItems: 'center' }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            height: 30,
            marginTop: 5,
            borderRadius: 5,
            width: '100%',
            maxWidth: 190,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'yellow',
              height: 20,
              width: 40,
              margin: 5,
            }}></View>
          <Text style={{ padding: 10 }}>Ma giam gia</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            height: 30,
            width: 80,
            margin: 5,
            marginTop: 10,
            padding: 5,
          }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>DAT MUA</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 24,
  },
  product: {
    flexDirection: 'row',
    gap: 15,
  },
  image: {
    width: 80,
    height: 130,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default Bai01;
