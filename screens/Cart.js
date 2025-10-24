import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { CartContext } from '../dataFiles/cartContext'
import CartCard from '../components/CartCard'
import Button from '../components/Button'
import NavBar from '../components/NavBar'

const window = Dimensions.get("window")

const Cart = ( {navigation }) => {
  const { cart, getTotalItems, getTotalPrice, removeFromCart } = useContext(CartContext)
  
  const [totalItems, setTotalItems] = useState(getTotalItems())

  const [totalPrice, setTotalPrice] = useState(getTotalPrice())

  return (
    <View style={styles.mainContainer}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.cartContainer}>
      <Text style={styles.topInfo}>Swipe left on an item to remove</Text>
      {cart.map((toy, index) => (
              <CartCard
              key={index}
              price={toy.price}
              image={toy.toyImage}
              toyName={toy.toyName}
            />
      ))}
      </View>
      
    </ScrollView>
    <View style={styles.cartPageBottom}>
        <View style={styles.total}>
          <Text style={styles.totalItems}>{totalItems} Items</Text>
          <Text style={styles.totalPrice}>${totalPrice}</Text>
        </View>
        <Button buttonText={"Proceed to checkout"} />
      </View>
      <NavBar navigation={navigation}/>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({

  mainContainer:{
    flex: 1
  },
  scrollContainer:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    backgroundColor: "white"
  },
  topInfo:{
    padding: 20,
    fontFamily: "Montserrat-Regular",
    color: '#878787'

  },
  cartContainer:{
    height: '60%'
  },
  cartPageBottom:{
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: '25%',
    marginBottom: 70,
    backgroundColor: "#F2F2F2"
  },

  total:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: window.width,
    padding: 20
  },
  totalItems: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#878787'
  },
  totalPrice: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 22,
  }
})