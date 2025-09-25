import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

const imageMap = {
  black: require('../assets/vs_black.png'),
  blue: require('../assets/vs_blue.png'),
  red: require('../assets/vs_red.png'),
  silver: require('../assets/vs_silver.png'),
};

export default function ColorSelectScreen({ route, navigation }) {
  const { product, selectedColor, setSelectedColor } = route.params;
  const [tempColor, setTempColor] = useState(selectedColor);

  const handleConfirm = () => {
    setSelectedColor(tempColor);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn màu cho {product.name}</Text>

      <Image source={imageMap[tempColor]} style={styles.image} />

      <FlatList
        data={product.colors}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setTempColor(item)}
            style={styles.colorItem}
          >
            <Text style={[styles.colorText, { backgroundColor: item }]}>
              {item}
            </Text>
          </Pressable>
        )}
      />

      <Pressable style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>XÁC NHẬN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 1,
    paddingHorizontal: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 1,
    textAlign: 'center',
  },
  image: {
    width: 160,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 1,
  },
  listContainer: {
    paddingBottom: 1,
    width: '100%',
    alignItems: 'center',
  },
  colorItem: {
    marginVertical: 6,
  },
  colorText: {
    width: 120,
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  confirmButton: {
    backgroundColor: '#1976d2',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
    marginTop: 1,
  },
});
