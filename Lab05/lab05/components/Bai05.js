import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { useState, useEffect } from 'react';

import Card05 from './Card05'

const Bai05 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('list');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://68319b5c6205ab0d6c3cfc2c.mockapi.io/images')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, 1000);
  }, [data]);

  const numColumns = viewMode === 'grid' ? 2: 1
  const horizontal = viewMode === 'horizontal'
  const keyExtractor = (item) => `${item.id}`

  return (
    <ScrollView>
      <View style={{ justifyContent: 'center', flexDirection: 'row', gap: 10 }}>
        <TouchableOpacity
          style={[
            {
              backgroundColor: 'cyan',
              padding: 10,
              margin: 5,
              borderRadius: 5,
              borderWidth: 1,
            },
            (viewMode === 'list' && { backgroundColor: 'red' }),
          ]}
          onPress={() => setViewMode('list')}>
          <Text>List View</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            {
              backgroundColor: 'cyan',
              padding: 10,
              margin: 5,
              borderRadius: 5,
              borderWidth: 1,
            },
            (viewMode === 'grid' && { backgroundColor: 'red' }),
          ]}
          onPress={() => setViewMode('grid')}>
          <Text>Grid View</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            {
              backgroundColor: 'cyan',
              padding: 10,
              margin: 5,
              borderRadius: 5,
              borderWidth: 1,
            },
            (viewMode === 'horizontal' && { backgroundColor: 'red' }),
          ]}
          onPress={() => setViewMode('horizontal')}>
          <Text>Horizontal</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={data}
          key ={viewMode}
          renderItem={({ item }) => <Card05 item={item} viewMode = {viewMode} />}
          keyExtractor={keyExtractor}
          horizontal = {horizontal}
          numColumns = {numColumns}   
          showsHorizontalScrollIndicator={true}
          style={{alignItems: 'center'}}
        />
      )}
    </ScrollView>
  );
};

export default Bai05;

const styles = StyleSheet.create({
  background: {},
});
