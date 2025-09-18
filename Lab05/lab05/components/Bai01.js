import { StyleSheet, FlatList, Text } from 'react-native';
import Card from './Card';

const Bai01 = ({ products }) => {
  return (
    <>
      <Text style={{ margin: 10, textAlign: 'center' }}>
        Bạn có thắc với sản phẩm vừa xem. Đừng ngại chat với shop{' '}
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Bai01;
