import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Card from './components/Card';
import Top from './components/Top';
import Bottem from './components/Bottem';
import Bai01 from './components/Bai01';
import Bai02 from './components/Bai02';
import Bai03 from './components/Bai03';

const products = [
  {
    id: 1,
    name: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
    image: '',
    chat: true,
  },
  {
    id: 2,
    name: 'Ca nấu lẩu mini đa năng',
    shop: 'Shop Devang',
    image: '',
    chat: true,
  },
  {
    id: 3,
    name: 'Ca nấu mì mini 1.2L',
    shop: 'Shop Devang',
    image: '',
    chat: true,
  },
  {
    id: 4,
    name: 'Ca nấu lẩu điện mini',
    shop: 'Shop Devang',
    image: '',
    chat: true,
  },
  {
    id: 5,
    name: 'Ca nấu mì, nấu nước mini',
    shop: 'Shop Devang',
    image: '',
    chat: true,
  },
  {
    id: 6,
    name: 'Ca nấu lẩu tiện dụng mini',
    shop: 'Shop Devang',
    image: '',
    chat: true,
  },
  {
    id: 7,
    name: 'Ca điện nấu mì mini',
    shop: 'Shop Devang',
    image: '',
    chat: true,
  },
  {
    id: 8,
    name: 'Ca nấu lẩu đa năng mini',
    shop: 'Shop Devang',
    image: '',
    chat: true,
  },
  {
    id: 9,
    name: 'Ca nấu mì mini gọn nhẹ',
    shop: 'Shop Devang',
    image: '',
    chat: true,
  },
  {
    id: 10,
    name: 'Ca nấu lẩu, nấu mì đa năng mini',
    shop: 'Shop Devang',
    image: '',
    chat: true,
  },
];

const products2 = [
  {
    id: 1,
    name: "Cáp chuyển từ Cổng USB sang PS2",
    price: 69900,
    rating: 4,
    reviews: 15,
    discount: "-39%",
    image: '../assets/air.jpg'
  },
  {
    id: 2,
    name: "Tai nghe Bluetooth không dây",
    price: 199000,
    rating: 5,
    reviews: 120,
    discount: "-20%",
    image: '../assets/air.jpg'
  },
  {
    id: 3,
    name: "Chuột không dây Logitech",
    price: 159000,
    rating: 4,
    reviews: 87,
    discount: "-15%",
    image: '../assets/air.jpg'
  },
  {
    id: 4,
    name: "Bàn phím cơ RGB",
    price: 499000,
    rating: 5,
    reviews: 210,
    discount: "-30%",
    image: '../assets/air.jpg'
  },
  {
    id: 5,
    name: "Ổ cứng di động 1TB",
    price: 1299000,
    rating: 4,
    reviews: 65,
    discount: "-25%",
    image: '../assets/air.jpg'
  },
  {
    id: 6,
    name: "Thẻ nhớ 64GB MicroSD",
    price: 249000,
    rating: 4,
    reviews: 53,
    discount: "-18%",
    image: '../assets/air.jpg'
  },
  {
    id: 7,
    name: "Loa Bluetooth mini",
    price: 299000,
    rating: 5,
    reviews: 143,
    discount: "-22%",
    image: '../assets/air.jpg'
  },
  {
    id: 8,
    name: "Pin sạc dự phòng 10.000mAh",
    price: 399000,
    rating: 4,
    reviews: 78,
    discount: "-28%",
    image: '../assets/air.jpg'
  },
  {
    id: 9,
    name: "Dây HDMI 2m",
    price: 99000,
    rating: 4,
    reviews: 45,
    discount: "-12%",
    image: '../assets/air.jpg'
  },
  {
    id: 10,
    name: "Webcam Full HD",
    price: 699000,
    rating: 4,
    reviews: 60,
    discount: "-35%",
    image: '../assets/air.jpg'
  }
];


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Top />
      <Bai03 />
      <Bottem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default App;
