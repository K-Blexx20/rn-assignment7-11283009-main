import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const addToCart = async (product) => {
    const cart = JSON.parse(await AsyncStorage.getItem("cart")) || [];
    cart.push(product);
    await AsyncStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Text style={styles.viewCart}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: "#888",
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: "#444",
    marginVertical: 10,
  },
  viewCart: {
    color: "#ff6f61",
    textDecorationLine: "underline",
    marginTop: 20,
  },
});

export default ProductDetailScreen;
