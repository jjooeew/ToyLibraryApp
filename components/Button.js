import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const window = Dimensions.get('window')

const Button = ( {buttonText, onPress} ) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        width: window.width * 0.85,
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#FF9636",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontFamily: 'Montserrat-Medium',
        fontSize: 20,
        color: "white"
    }
})