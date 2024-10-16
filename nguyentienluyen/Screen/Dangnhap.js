import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const Dangnhap = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = React.useRef(null);

  return (
    <View style={styles.container}>
      {/* Hình ảnh phía trên */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/f806/f060/4e1b9f8b9d7440c6aff2ea6b09677ca1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbzDrt2MFUlepN5~I22AYHb8W2FaZgvms01WMsQDHwj2X1qw3WP2qQQDbhmG7ROa8E7Reuxfw5fpHAyrHL6wSlSLx9RR8VlrYYbb-OjSq8PxI91A4CBODEj8JWrHJmuPynOEwwzS4jME-4imiDlF0igEAARznIZMhPX1szkVxGt8wh4U3V-pkaiQiJvlD43kUwjpzQyaEsElL8lc3xu788nRzKoSo-EIdZHvABgQ3Cuc8EUfZ2Z59mggYxCCcVCD9BzEKEZSI6bbCUUjT6qzd96rCf-566vDYRUBEnaEllWvkm12v84GJnQwDvqH8jxIAM30tcmcIalmUSZZccQXwQ__' }}
          style={styles.image}
        />
      </View>

      {/* Tiêu đề */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Get your groceries</Text>
        <Text style={styles.title}>with nectar</Text>
      </View>

      {/* Input số điện thoại */}
      <View style={styles.phoneInputContainer}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="BD"
          layout="first"
          onChangeFormattedText={(text) => setPhoneNumber(text)}
          containerStyle={styles.phoneInput}
          textContainerStyle={styles.textInput}
        />
        <View style={styles.divider} /> 
      </View>

      {/* Hoặc đăng nhập bằng mạng xã hội */}
      <Text style={styles.orText}>Or connect with social media</Text>

      {/* Nút Google */}
      <TouchableOpacity style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Nút Facebook */}
      <TouchableOpacity style={[styles.button, styles.facebookButton]}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Đẩy mọi thứ lên trên cùng
    alignItems: 'flex-start', // Đẩy sang bên trái
    backgroundColor: '#fff',
    paddingHorizontal: 20, // Thêm khoảng cách hai bên
  },
  imageContainer: {
    position: 'absolute',
    top: -100, // Điều chỉnh để đưa hình ảnh lên trên
    left: 50,
    right: 0,
    alignItems: 'center',
  },
  image: {
    width: '200%',
    height: 400, // Chiều cao của hình ảnh
    resizeMode: 'cover',
    transform: [{ rotate: '180deg' }, { translateY: 0 }, { rotate: '50deg' }], // Xoay ngược và nghiêng hình ảnh
  },
  titleContainer: {
    marginTop: 350, // Đẩy tiêu đề xuống dưới hình ảnh
    alignItems: 'flex-start', // Đẩy tiêu đề sang trái
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left', // Đặt tiêu đề sang trái
  },
  phoneInputContainer: {
    width: '100%',
    marginVertical: 30, // Thay đổi khoảng cách để dịch xuống
    alignItems: 'flex-start', // Đẩy phần nhập số điện thoại sang trái
  },
  phoneInput: {
    width: '100%',
  },
  textInput: {
    paddingVertical: 0,
  },
  divider: {
    height: 1, // Độ cao của đường line
    backgroundColor: '#cccccc', // Màu sắc của đường line
    width: '100%', // Đường line rộng bằng 100% của container
    marginVertical: 10, // Khoảng cách trên và dưới
  },
  orText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
    textAlign: 'center', // Thêm thuộc tính này để căn giữa chữ
    width: '100%', // Đảm bảo rằng width là 100%
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 20, // Bo góc lớn hơn cho nút
    marginVertical: 10,
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#4285F4', // Màu nút Google
  },
  facebookButton: {
    backgroundColor: '#3b5998', // Màu nút Facebook
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Dangnhap;
