import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import PhotoGrid from './components/PhotoGrid'
import NavBar from './components/NavBar'

export default function App () {
  return (
    <View style={styles.container}>
      <NavBar/>
      <PhotoGrid />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
