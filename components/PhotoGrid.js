import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native'

const PhotoGrid = () => {
  const photos = [
    { id: '1', text: 'Rain', uri: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' },
    { id: '2', text: 'Ocean', uri: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' },
    { id: '3', text: 'Forest', uri: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' },
    { id: '4', text: 'City', uri: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' },
    { id: '2', text: 'Silence', uri: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' },
    { id: '2', text: 'Text for Photo 1', uri: 'https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' },
    { id: '2', text: 'Text for Photo 1', uri: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' },
    { id: '2', text: 'Text for Photo 1', uri: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' },
    { id: '2', text: 'Text for Photo 1', uri: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' },
    { id: '2', text: 'Text for Photo 1', uri: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' },
    { id: '2', text: 'Text for Photo 1', uri: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' },
    { id: '2', text: 'Text for Photo 1', uri: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80' }

  ]

  const screenWidth = Dimensions.get('window').width
  const aspectRatio = 3 / 4
  const margin = 40
  const imageWidth = screenWidth - 2 * margin
  const imageHeight = imageWidth * aspectRatio
  const transparentBarHeight = imageHeight * 0.2

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <Image source={{ uri: item.uri }} style={[styles.photo, { width: imageWidth, height: imageHeight }]} />
      <View style={[styles.transparentBar, { width: imageWidth, height: transparentBarHeight }]}>
        <Text style={styles.barText}>{item.text}</Text>
      </View>
    </View>
  )

  return (
      <View style={styles.container}>
        <Text style={[styles.GridText, { color: '#0B978D', fontSize: 24, fontWeight: 'bold', margin: 24, alignSelf: 'center' }]}>
        Select your sound
      </Text>
        <FlatList
          data={photos}
          renderItem={renderItem}
          numColumns={1}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.grid}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  grid: {
    justifyContent: 'space-between'
  },
  photo: {
    borderRadius: 5
  },
  transparentBar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  barText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default PhotoGrid
