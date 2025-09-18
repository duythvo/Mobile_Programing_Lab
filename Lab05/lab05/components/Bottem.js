import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome, Ionicons,  MaterialIcons, } from '@expo/vector-icons';

const Bottem = () => {
  return (
    <View style={styles.background}>
      <MaterialIcons name="apps" size={30} color="white" />
      <Ionicons name="home" size={30} color="white" />
      <Ionicons name="arrow-back" size={30} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    textAlign: 'center',
    backgroundColor: 'cyan',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
});

export default Bottem;
