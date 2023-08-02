import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.navBarText}>YPNOS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 60,
    backgroundColor: '#f0f0f0',
    alignItems: 'left',
    justifyContent: 'center'
  },
  navBarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    margin: 4
  }
})

export default NavBar
