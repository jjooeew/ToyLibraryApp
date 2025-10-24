import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const window = Dimensions.get("window");

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <Pressable
        style={styles.navBarItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Feather name="home" size={24} color="black" />
      </Pressable>
      <Pressable
        style={styles.navBarItem}
        onPress={() => navigation.navigate("Catalogue")}
      >
        <Foundation name="magnifying-glass" size={24} color="black" />
      </Pressable>
      <Pressable
        style={styles.navBarItem}
        onPress={() => navigation.navigate("Cart")}
      >
        <Feather name="shopping-cart" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 65,
    width: window.width * 1,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#eee",
  },
  navBarItem: {
    padding: 20,
    width: window.width * 0.3,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
  },
});
