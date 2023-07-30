import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, FONTS } from '../constants'
import { DATA } from '../constants'
import NFTCard from '../components/NFTCard'
const Home = () => {
  const [NFTData, setNFTData] = useState(DATA)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={NFTData}
          renderItem={({ item }) => <NFTCard item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: SIZES.small + 10
  }
})
export default Home
