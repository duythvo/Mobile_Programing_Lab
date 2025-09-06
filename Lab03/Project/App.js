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
import Bai05 from './components/bai05';
import Bai06 from './components/bai06';
import Bai07 from './components/bai07';
import Bai08 from './components/bai08';



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
     {/**  <Bai04 /> */}
     {/**  <Bai05 /> */}
     {/**  <Bai06 /> */}
     {/**  <Bai07 /> */}
      <Bai08 />
    </SafeAreaView>
  );
};


export default App;
