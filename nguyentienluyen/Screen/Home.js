import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation để điều hướng

export default function Home() {
  const navigation = useNavigation(); // Khởi tạo đối tượng điều hướng

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/65e9/1e96/4e8f13cbdb37604e351d37d72a1eb837?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O5qjFLGKk6FlyMzNetSaH-cVrcNKehohrP-Xh9eC9PfJfkkyhTO4Mfma-1fHNgERpE~p22xEfyB8HmYa6XRjjWD-TMxM0AS6R7HPIGKVymH6t981RsEC94-JcKZqHxrYD8Uvr6Zahuv7co8RLBQklKu9dufJWOP6Hq3omcMRw7AC0feCMdWGEvbjUVN55~hfiaMZCd0Hru-ZO7ZJk0-O5685-7qJT2V01rocnjvdAFUO5J~CZ3518ltspmexCVlPG30sh7oReVDuzWvyxnVjV-NlGZkD9IRMcLk5LmNBvhU3QbtC8BdgHGDqQv59hm-utG72-HbgZqs23AGqWM-ldw__",
        }}
        style={styles.image}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome </Text>
        <Text style={styles.title}>to our store </Text>
        <Text style={styles.subtitle}>
          Get your groceries in as fast as one hour
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Dangnhap')} // Điều hướng tới màn hình Đăng nhập
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end", // Điều chỉnh để đảm bảo văn bản luôn nằm phía dưới
  },
  image: {
    width: "150%", // Tăng chiều rộng để tránh mất ảnh khi dịch
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: [{ translateX: -180 }], // Dịch sang trái 80 pixel (tùy chỉnh)
  },
  overlay: {
    padding: 20, // Thêm padding để có không gian giữa văn bản và viền
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    width: '100%',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#32CD32', // Màu xanh lá cây
    paddingVertical: 20,
    paddingHorizontal: 125,
    borderRadius: 20,
    elevation: 2,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
