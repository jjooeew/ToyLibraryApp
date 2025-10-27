import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const window = Dimensions.get("window");

const CatalogueCard = ({ image, toyName, toyType, price, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <MaterialCommunityIcons
        style={styles.icon}
        name="heart-outline"
        size={18}
        color="orange"
      />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} resizeMode="contain" />
      </View>
      <Text style={styles.toyName}>{toyName}</Text>
      <Text style={styles.toyType}>{toyType}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.dollarSign}>$</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CatalogueCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 4,
    width: window.width * 0.35,
    height: window.height * 0.3,
    alignItems: "flex-start",
    backgroundColor: "#F4F4F4",
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
  icon: {
    alignSelf: "flex-end",
    marginBottom: -20,
  },
  imageContainer: {
    width: "100%",
    height: "79%",
    marginBottom: -9,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  toyName: {
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    letterSpacing: 0.1,
    color: "#4F4F4F",
  },
  toyType: {
    fontSize: 10,
    color: "#909090",
    marginBottom: 0,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 7,
  },
  dollarSign: {
    fontSize: 13,
    fontFamily: "Montserrat-SemiBold",
    color: "#1BDAF1",
  },
  price: {
    fontSize: 14,
    fontFamily: "ExtraBold",
  },
});
