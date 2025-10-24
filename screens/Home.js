import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import * as React from "react";

import DonateLinkCard from "../components/DonateLinkCard";
import CatalogueButton from "../components/CatalogueButton";
import HowDoesItWorkSection from "../components/HowDoesItWorkSection";
import SelectCategoryCard from "../components/SelectCategoryCard";
import categories from "../dataFiles/categoriesFile";
import CartCard from "../components/CartCard";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

const window = Dimensions.get("window");

const Home = ({ navigation }) => {
  const navigateToCategory = (categoryChoice) => {
    navigation.navigate("Catalogue", { text: categoryChoice });
  };
  const linkToCatalogue = () => {
    navigation.navigate("Catalogue");
  };

  const navigateToCart = () => {
    navigation.navigate("Cart")
  };
  return (
    <View style={styles.mainContainer}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      <DonateLinkCard />
      <CatalogueButton onPress={linkToCatalogue} />
      <HowDoesItWorkSection />
      <Text style={styles.exploreTitle}>Explore Our Catagories</Text>
      {categories.map((category, index) => (
        <SelectCategoryCard
          key={index}
          imgSrc={category.imgSrc}
          text={category.text}
          cardColor={category.cardColor}
          textColor={category.textColor}
          onPress={() => navigateToCategory(category.text)}
        />
      ))}
      <Button buttonText={"Cart"} onPress={navigateToCart} />
    </ScrollView>
    <NavBar navigation={navigation}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  scrollContainer: {
    alignItems: "center",
    backgroundColor: "white",
  },
  exploreTitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 25,
    marginVertical: 30,
  },
});
