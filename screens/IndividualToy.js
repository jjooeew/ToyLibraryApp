import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, {useContext, useState} from "react";
import Button from "../components/Button";
import { CartContext } from "../dataFiles/cartContext";
import NavBar from "../components/NavBar";


const window = Dimensions.get("window");

const IndividualToy = ({
  route, navigation
}) => {

  const [addedToCart, setAddedToCart] = useState(false);

  const selectAddToCart = () => {

  }

  const { cart, addToCart, removeFromCart } = useContext(CartContext)
  const { toy } = route.params;
  return (
    <View style={styles.background}>
      <View style={styles.individualToyContainer}>
        <View style={styles.toyDataContainer}>
          <Text style={styles.toyType}>{toy.toyType}</Text>
          <Text style={styles.toyName}>{toy.toyName}</Text>
          <Text style={styles.toyId}>Toy ID:  {toy.id}</Text>
        </View>
        <View style={styles.toyImageContainer}>
          <Image style={styles.toyImage} resizeMode="contain" source={toy.toyImage} />
        </View>
        <View style={styles.toyInfoContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{toy.description}</Text>
          <View style={styles.toyPriceContainer}>
            <Text style={styles.dollarSign}>$</Text>
            <Text style={styles.toyPrice}>{toy.price}</Text>
          </View>
          <Button buttonText={"Add to cart"} onPress={() => addToCart(toy)}/>
        </View>
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
};

export default IndividualToy;

const styles = StyleSheet.create({
  individualToyContainer: {

  },
  toyDataContainer: {
    height: window.height * 0.1,
    marginTop: 10,
    marginLeft: 20,

  },
  toyType: {
    fontSize: 16,
    color: "#868686",
    fontFamily: "Montserrat-Regular",
  },
  toyName: {
    fontSize: 22,
    color: "#114D7B",
    fontFamily: "Montserrat-Bold",
  },
  toyId: {
    fontSize: 16,
    color: "#868686",
    fontFamily: "Montserrat-Regular",
  },
  toyImageContainer: {
    height: window.height * 0.35,
    width: window.width * 0.9,
    alignItems: 'center',
    alignSelf: 'center'
  },
  toyInfoContainer: {
    alignSelf: 'center',
    backgroundColor: '#F4F4F4',
    height: window.height * 0.65,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
},
  descriptionTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#868686'
  },
  background: {
    backgroundColor: "white",
    flex: 1,
  },
  toyPriceContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 30
  },
  toyPrice:{
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',

  },
  dollarSign: {
    fontFamily: 'Montserrat-Regular',
    color: '#1BDAF1',
    fontSize: 22
  },
  toyImage: {
    height: '100%',
    width: '100%'
  }
});
