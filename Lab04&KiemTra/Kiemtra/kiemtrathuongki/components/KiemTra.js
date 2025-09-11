import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const trangThai = {
    CHUA_DAT: 'CHUA_DAT',
    DANG_DAT: 'DANG_DAT',
    DA_DAT: 'DA_DAT',
  };

  const mau = {
    CHUA_DAT: 'white',
    DANG_DAT: 'red',
    DA_DAT: 'gray',
  };

const KiemTra = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const arr2 = Array.from({ length: 20 }).map((_, i) => ({
    id: (i + 1).toString(),
    soGhe: `${i + 1}`,
    trangThai: trangThai.CHUA_DAT,
  }));

  const [ghe, setGhe] = useState(arr2);

  const setTrangThai = (id) => {
    setGhe((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        let next;
        if (s.trangThai === trangThai.CHUA_DAT) next = trangThai.DANG_DAT;
        else if (s.trangThai === trangThai.DANG_DAT) next = trangThai.DA_DAT;
        else next = trangThai.CHUA_DAT;
        return { ...s, trangThai: next };
      })
    );
  };

  const setTrangThaiChoGhe = (id, trangThaiMoi) => {
    setGhe((prev) =>
      prev.map((s) => (s.id === id ? { ...s, trangThai: trangThaiMoi } : s))
    );
  };

  const setMauGhe = () =>{
    return "color: red"
  }

  
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 200,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>MAN HINH</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        {arr.map((item) => (
          <TouchableOpacity
            style={{
              width: '15%',
              aspectRatio: 1,
              backgroundColor: 'white',
              borderRadius: 5,
              borderWidth: 1,
              margin: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>{item}</View>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 2,
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5,
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              width: '10%',
              height: 30,
            }}>
            {' '}
          </View>
          <Text>Cho chua dat</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5,
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              width: '10%',
              height: 30,
              backgroundColor: 'red',
            }}>
            {' '}
          </View>
          <Text>Cho dang dat</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5,
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              width: '10%',
              height: 30,
              backgroundColor: 'gray',
            }}>
            {' '}
          </View>
          <Text>Cho dat roi</Text>
        </View>
      </View>
      <TouchableOpacity style= {{backgroundColor: 'blue'}}>
       <Text style={{color: 'white', textAlign: 'center'}}> Dat Cho </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 24,
  },
});

export default KiemTra;
