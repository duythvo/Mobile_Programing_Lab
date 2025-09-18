import { StyleSheet, Text, FlatList } from 'react-native';
import Card02 from './Card02';

const Bai02 = ({ products }) => {
  return (
    <>
      <Text style={{ margin: 10, textAlign: 'center' }}>
        Bạn có thắc với sản phẩm vừa xem. Đừng ngại chat với shop{' '}
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <Card02 item={item} />}
        keyExtractor={(item) => item.id}
        numColumns= {2}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Bai02;
