import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const imageMap = {
  black: require('../assets/vs_black.png'),
  blue: require('../assets/vs_blue.png'),
  red: require('../assets/vs_red.png'),
  silver: require('../assets/vs_silver.png'),
};

export default function HomeScreen() {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('black');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/68d4975dae596e708ffa9907')
      .then((res) => res.json())
      .then((data) => {
        const productData = data.record[0];
        setProduct(productData);
        setSelectedColor(productData.colors[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  if (loading || !product) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.name}</Text>

      <Image source={imageMap[selectedColor]} style={styles.image} />

      <Text style={styles.price}>{product.price.toLocaleString()} đ</Text>
      <Text style={styles.oldPrice}>{product.oldPrice.toLocaleString()} đ</Text>
      <Text style={styles.rating}>({product.ratingCount} đánh giá)</Text>

      <Pressable
        style={styles.chooseButton}
        onPress={() =>
          navigation.navigate('ColorSelect', {
            product,
            selectedColor,
            setSelectedColor,
          })
        }>
        <Text style={styles.chooseButtonText}> CHỌN MÀU</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 180,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 1,
  },
  price: {
    fontSize: 22,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 14,
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  chooseButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d32f2f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  chooseButtonText: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
});
