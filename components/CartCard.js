import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const window = Dimensions.get("window");

const CartCard = ({ image, toyName, price }) => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (1 < quantity) {
      setQuantity(quantity - 1);
    }
  };
  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.toyInfo}>
        <Text style={styles.toyName}>{toyName}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.dollarSign}>$</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Pressable onPress={decrease}>
            <Text style={styles.incrementer}>-</Text>
          </Pressable>
          <Text style={styles.quantity}>{quantity}</Text>
          <Pressable onPress={increase}>
            <Text style={styles.incrementer}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.cardEnd}>
        <View style={styles.toyImageContainer}>
          <Image source={image} style={styles.toyImage} />
        </View>
        <MaterialCommunityIcons
          style={styles.icon}
          name="heart-outline"
          size={20}
          color="orange"
        />
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    width: window.width * 0.9,
    height: window.height * 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  quantity: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
  },
  incrementer: {
    fontFamily: "Montserrat-Regular",
    fontSize: 25,
    color: "#878787",
  },
  toyInfo: {
    height: "100%",
    width: "70%",
    justifyContent: "space-evenly",
    paddingLeft: 10,
  },
  cardEnd: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  toyImageContainer: {
    width: "20%",
    height: "90%",
    alignSelf: "flex-end",
  },
  toyImage: {
    width: "100%",
    height: "100%",
  },
  toyName: {
    fontSize: 15,
    fontFamily: "Montserrat-SemiBold",
    letterSpacing: 0.1,
    color: "#4F4F4F",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 10,
  },
  dollarSign: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    color: "#1BDAF1",
  },
  price: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
  },
});
