import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants'
import { Image } from 'react-native'
const NFTCard = ({ item }) => {
  return (
    <SafeAreaView style={styles.container}>
      //Image inside TouchableOpacity button
      <TouchableOpacity>
        <Image source={item.} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg,
    paddingHorizontal: SIZES.small + 10
  }
})
export default NFTCard
