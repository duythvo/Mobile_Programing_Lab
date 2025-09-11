import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import KiemTra from './components/KiemTra';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <KiemTra />
    </SafeAreaView>
  );
}


