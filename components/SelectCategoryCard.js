import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons'; 




const window = Dimensions.get("window");



const SelectCategoryCard = ({ imgSrc, text, cardColor, textColor, onPress }) => {

  
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={[styles.exploreCardContainer, {backgroundColor: cardColor}]}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.exploreImage}
          source={imgSrc}
        />
      </View>
      <View style={styles.cardInfo}>
      <Text style={[styles.exploreText, {color: textColor}]}>{text} Toys</Text>
      <AntDesign name="right" size={20} color={textColor}/>
      </View>
    </TouchableOpacity>
  );
};

export default SelectCategoryCard;

const styles = StyleSheet.create({
  exploreCardContainer: {
    alignItems: "center",
    height: window.height / 5,
    width: window.width * 0.95,
    flexDirection: 'row',
    gap: 40,
    borderRadius: 10,
    marginBottom: 15
  },
  exploreText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 22,
    width: '75%'
  },
  exploreImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    
  },
  imageContainer: {
    width: window.height / 6,
    height: window.height / 6,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15
  },
  cardInfo:{
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15

  }
});
