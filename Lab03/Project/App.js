import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Pressable,
} from 'react-native';
import Bai01 from './components/bai01';
import Bai02 from './components/bai02';
import Bai03 from './components/bai03';
import Bai04 from './components/bai04';



// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const App = () => {
  return (
     <SafeAreaView style={{ flex: 1 }}>
     {/**  <Bai01 /> */}
     {/**  <Bai02 /> */}
     {/**  <Bai03 /> */}
      <Bai04 />
    </SafeAreaView>
  );
};


export default App;
