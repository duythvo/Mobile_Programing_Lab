import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Card = ({ item }) => {
  return (
    <View style={styles.backGround}>
      <Image style={styles.image} source={require('../assets/download.jpg')} />
      <View>
        <Text style= {{fontSize: 20}}>Iphone 17 pro max</Text>
        <Text style={{ marginTop: 10, color: 'red', fontWeight: 'bold' }}>
          Iphone 17 pro max
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text> Chat </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    objectFit: 'cover',
    height: 90,
    width: 90,
  },
  backGround: {
    backgroundColor: 'white',
    flex: 1,
    maxHeight: 100,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderColor: 'gray',
    justifyContent: 'space-evenly'
  },
  button: {
    marginLeft: 30,
    backgroundColor: 'orange',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
  },
});

export default Card;
