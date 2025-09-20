import { View, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Card04 from "./Card04"

const Bai04 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://68319b5c6205ab0d6c3cfc2c.mockapi.io/users')
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setData(data);
        });
    }, 1000);
  }, [data]);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Card04 item={item} />}
          keyExtractor={(item) => item.id}
          horizontal   
          showsHorizontalScrollIndicator={true}
        />
      )}
    </View>
  );
};

export default Bai04;

const styles = StyleSheet.create({
  background: {},
});
