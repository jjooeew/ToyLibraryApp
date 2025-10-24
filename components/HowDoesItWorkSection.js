import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

window = Dimensions.get('window')

const HowDoesItWorkSection = () => {
  return (
    <View style={styles.howDoesItWorkContainer}>
      <Text style={styles.title}>How does it work?</Text>
      <View style={styles.step}>
        <Text style={styles.stepNumber}>1</Text>
        <Text style={styles.stepContent}>
          Go to our catalogue and add the toys you want into your cart
        </Text>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepNumber}>2</Text>
        <Text style={styles.stepContent}>
          Once you have selected your toys head over to the cart page and
          confirm your order
        </Text>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepNumber}>3</Text>
        <Text style={styles.stepContent}>
          If your order is to your liking hit checkout to organise pickup or
          delivery
        </Text>
      </View>
    </View>
  );
};

export default HowDoesItWorkSection;

const styles = StyleSheet.create({
    howDoesItWorkContainer:{
        width: window.width * 0.85
    },
    title:{
        fontFamily: 'Montserrat-Medium',
        fontSize: 30,
        letterSpacing: 1.2,
        marginTop: 35,
        marginBottom: 20,
        alignSelf: 'center'
    },
    step:{
        flexDirection: "row",
        marginBottom: 24
    },
    stepNumber:{
        fontFamily: 'Montserrat-SemiBold',
        color: '#FF9636',
        fontSize: 50,
        width: '16%',
        paddingLeft: 8,
    },
    stepContent:{
        fontFamily: 'Montserrat-Regular',
        color: '#434343',
        fontSize: 20,
        width: '78%',
        paddingTop: 7
    },
});
