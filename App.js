import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, useColorScheme } from 'react-native'
import PhotoGrid from './components/PhotoGrid'
import NavBar from './components/NavBar'

export default function App () {
  const colorScheme = useColorScheme()
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark')

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  const backgroundColor = isDarkTheme ? '#000000' : '#ffffff'

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <NavBar isDarkTheme={isDarkTheme} onToggleTheme={toggleTheme} />
      <PhotoGrid />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
