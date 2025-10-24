import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const window = Dimensions.get("window");

function CatalogueButton({onPress}) {

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Check out our catalogue</Text>
      <AntDesign name="right" size={14} color={"#6D6D6D"} />
    </TouchableOpacity>
  );
};

export default CatalogueButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    padding: 20,
    borderRadius: 10,
    marginTop: 15,
    width: window.width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    fontFamily: "Montserrat-SemiBold",
    color: "#6D6D6D",
    letterSpacing: 1.1,
    fontSize: 15,
  },
});
