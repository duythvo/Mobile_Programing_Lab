import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Card04 = ({ item }) => {
  return (
    <View style={styles.background}>
      <View>
        <Text style= {{fontSize: 15, color: 'red', fontWeight: 'bold'}}>{item.name}</Text>
        <Text style={{ marginTop: 5, fontWeight: 'bold' }}>
          {item.email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    maxHeight: 500,
    height: 300,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    borderColor: 'gray',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
   },
});

export default Card04;
