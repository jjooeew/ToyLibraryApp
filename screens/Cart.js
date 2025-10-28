import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React from "react";
import { useCart } from "../dataFiles/cartContext";
import CartCard from "../components/CartCard";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

const window = Dimensions.get("window");

const Cart = ({ navigation }) => {
  const { items, totals } = useCart();

  const data = Object.values(items);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cartContainer}>
          <Text style={styles.topInfo}>Swipe left on an item to remove</Text>

          {data.map((item) => (
            <CartCard
              key={String(item.id)}
              item={item}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.cartPageBottom}>
        <View style={styles.total}>
          <Text style={styles.totalItems}>{totals.count} Items</Text>
          <Text style={styles.totalPrice}>${totals.sum}</Text>
        </View>
        <Button buttonText={'Proceed to checkout'} />
      </View>

      <NavBar navigation={navigation} />
    </View>

  );
};

export default Cart;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  topInfo: {
    padding: 20,
    fontFamily: "Montserrat-Regular",
    color: "#878787",
  },
  cartContainer: {
    height: "60%",
  },
  cartPageBottom: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    height: "25%",
    marginBottom: 70,
    backgroundColor: "#F2F2F2",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: window.width,
    padding: 20,
  },
  totalItems: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "#878787",
  },
  totalPrice: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 22,
  },
});
