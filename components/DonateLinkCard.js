import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const window = Dimensions.get("window");


const DonateLinkCard = () => {
  return (
    <View style={styles.donateContainer}>
        <View style={styles.donateInfoAndLinkContainer}>
        <Text style={styles.donateInfo}>
            Do you have old toys you want to get rid of?
        </Text>
        <Text style={styles.donateLink}>
            Donate them here
        </Text>
        </View>
        <View style={styles.stackOfGiftsContainer}>
            <Image 
            source={require('../assets/stackOfGifts.png')}
            style={styles.stackOfGifts}
            resizeMode='contain'
            />
        </View>
      </View>
  )
}

export default DonateLinkCard

const styles = StyleSheet.create({
    donateContainer:{
        marginTop: 30,
        height: window.height / 5,
        width: window.width * 0.9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1EAAF1',
        paddingHorizontal: 15,
        borderRadius: 10,
        
    },
    donateInfoAndLinkContainer:{
        width: '60%',
        justifyContent: 'flex-end',
    },
    donateInfo: {
        fontSize: 22,
        fontFamily: 'Montserrat-Bold',
        color: '#055076',
        paddingBottom: 10
    },
    donateLink: {
        color: '#055076',
        textDecorationLine: 'underline',
        fontSize: 18,
        fontFamily: 'Montserrat-Regular',
    },
    stackOfGiftsContainer:{
        width: '40%',
    },
    stackOfGifts:{
        width: '100%',
        height: '100%'
    }
})