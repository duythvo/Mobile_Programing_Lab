import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Pressable,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './AssetExample';

const Bai01 = () => {
  return (
    <View style={[styles.container, { backgroundColor: 'cyan', flex: 1 }]}>
      <View style={{ flex: 4 }}>
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/696/3000/2000"
          // placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>GROW</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>YOUR BUSINESS</Text>
      </View>
      <View style={ { flex: 0.5 }}>
        <Text style={{ fontSize: 15, textAlign: 'center' }}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor:'blue',
              padding: 12,
              borderRadius: 8,
              alignItems: 'center',
              minWidth: 100,
            },
          ]}
          onPress={() => alert('Pressed 1!')}>
          <Text style={{ color: 'white', fontSize: 16 }}>Login</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: 'yellow',
              padding: 12,
              borderRadius: 8,
              alignItems: 'center',
              minWidth: 100,
            },
          ]}
          onPress={() => alert('Pressed 2!')}>
          <Text style={{ color: 'black', fontSize: 16 }}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image: {
    flex: 1,
    width: '80%',
    backgroundColor: '#0553',
    margin: 'auto',
    borderRadius: 10
  },
});

export default Bai01;
