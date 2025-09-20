import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Card05 = ({ item, viewMode }) => {

  const isGrid = viewMode === 'grid'
  const containerStyle = isGrid ?  styles.grid : styles.list

  return (
    <View style={containerStyle}>
      <Image
        source={{uri: item.image}}
        style = {isGrid ? styles.gridImage : styles.listImage}
        resizeModev= 'cover'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    backgroundColor: 'cyan',
    alignItems: 'center'
  },
  list: {
    backgroundColor: 'yellow',
    alignItems: 'center'
  },
  gridImage: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
    marginBottom: 5
  },
  listImage: {
    height: 400,
    width: 400,
    resizeMode: 'cover',
    marginBottom: 5
  }
});

export default Card05;
