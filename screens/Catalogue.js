import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import CatalogueCard from "../components/CatalogueCard";
import IndividualToy from "./IndividualToy";
import toys from "../dataFiles/toyFile";
import NavBar from "../components/NavBar";

const Catalogue = ({ navigation, route }) => {
  const toyType = route.params?.text || null;

  const filteredToys = toys.filter((toy) => {
    if (toyType === null) {
      return true;
    } else {
      return toy.toyType === toyType;
    }
  });

  const linkToIndividualToy = (toy) => {
    navigation.navigate("IndividualToy", { toy: toy });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.icons}>
        <Entypo name="magnifying-glass" size={24} color="black" />
        <FontAwesome5 name="sliders-h" size={24} color="black" />
      </View>
      <Text style={styles.itemsFound}>{filteredToys.length} items found</Text>
      <ScrollView contentContainerStyle={styles.resultsContainer}>
        {filteredToys.map((toy, index) => (
          <CatalogueCard
            key={index}
            image={toy.toyImage}
            toyName={toy.toyName}
            toyType={toy.toyType}
            price={toy.price}
            onPress={() => linkToIndividualToy(toy)}
          />
        ))}
      </ScrollView>
      <NavBar navigation={navigation}/>
    </View>
  );
};

export default Catalogue;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FFF",
     },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    marginHorizontal: 8,
  },
  itemsFound: {
    fontSize: 16,
    marginBottom: 16,
  },
  resultsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
