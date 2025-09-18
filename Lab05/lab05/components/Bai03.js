import { StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import Card03 from './Card03';

const Bai03 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://68cb5fe4716562cf50733f31.mockapi.io/product/product')
        .then((response) => response.json())
        .then((data) => {
          setData(data), setLoading(false);
        });
    }, 500);
  }, [data]);

  return (
    <>
      <Text style={{ margin: 10, textAlign: 'center' }}>
        Bạn có thắc với sản phẩm vừa xem. Đừng ngại chat với shop{' '}
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Card03 item={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default Bai03;
