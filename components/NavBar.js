import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Switch } from 'react-native-paper'

// eslint-disable-next-line react/prop-types
const NavBar = ({ isDarkTheme, onToggleTheme }) => {
  return (
    <View style={[styles.navBar, { backgroundColor: isDarkTheme ? '#0B978D' : '#f0f0f0' }]}>
      <Text style={[styles.navBarText, { color: isDarkTheme ? '#ffffff' : '#333' }]}>
        YPNOS
      </Text>
      <Switch color={'black'} value={isDarkTheme} onValueChange={onToggleTheme} />
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: '100%',
    paddingHorizontal: 16
  },
  navBarText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 4
  }
})

export default NavBar
