import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Top = () => {
  return (
    <View style={styles.background}>
      <Ionicons name="arrow-back" size={24} color="white" />
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
        Chat
      </Text>
      <Ionicons name="cart" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    textAlign: 'center',
    backgroundColor: 'cyan',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
});

export default Top;
