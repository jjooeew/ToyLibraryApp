import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Catalogue from "./screens/Catalogue";
import IndividualToy from "./screens/IndividualToy";
import Cart from "./screens/Cart";
import { CartProvider } from "./dataFiles/cartContext";

const Stack = createNativeStackNavigator();

export default App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Montserrat-Bold": require("./assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
        "Montserrat-Regular": require("./assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
        "Montserrat-SemiBold": require("./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
        "Montserrat-Medium": require("./assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
        "SemiBoldItalic": require("./assets/fonts/Montserrat/static/Montserrat-SemiBoldItalic.ttf"),
        "ExtraBold": require("./assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf"),
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Catalogue" component={Catalogue} />
          <Stack.Screen name="IndividualToy" component={IndividualToy} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
