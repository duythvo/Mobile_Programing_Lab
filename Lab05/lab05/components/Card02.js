import { Text, View, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // thêm icon FontAwesome

const Card02 = ({ item }) => {
  return (
    <View style={styles.backGround}>
      <Image style={styles.image} source={require('../assets/air.jpg')} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ fontSize: 15, flexWrap: 'wrap', width: 175 }}>{item.name}</Text>
        <View style={styles.ratingRow}>
          {[...Array(item.rating)].map((_, index) => (
            <FontAwesome key={index} name="star" size={14} color="gold" />
          ))}
          {[...Array(5 - item.rating)].map((_, index) => (
            <FontAwesome key={`empty-${index}`} name="star-o" size={14} color="gray" />
          ))}
          <Text style={styles.reviewText}>({item.reviews})</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            gap: 10,
          }}>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>{item.price}</Text>
          <Text style={{ fontSize: 12, color: 'gray' }}>{item.discount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    resizeMode: 'cover', 
    borderRadius: 5,
  },
  backGround: {
    backgroundColor: 'white',
    maxHeight: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    margin: 5,
    borderColor: 'gray',
    justifyContent: 'space-evenly',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 5,
  },
  reviewText: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 5,
  },
});

export default Card02;
