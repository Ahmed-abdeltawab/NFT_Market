import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'
import nft08 from '../assets/images/nft08.jpg'
import nft04 from '../assets/images/nft04.jpg'
import nft06 from '../assets/images/nft06.jpg'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation()

  const pressHandler = () => {
    navigation.navigate('Home')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageCard}>
          <Image style={styles.image} source={nft06} />
        </View>
        <View style={[styles.imageCard, { top: SIZES.medium + 17 }]}>
          <Image style={styles.image} source={nft08} />
        </View>
        <View style={styles.imageCard}>
          <Image style={styles.image} source={nft04} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
        <Text style={styles.subText}>
          Explore the top collection of NFTs and buy and sell your NFTs as well
        </Text>
      </View>
      <Button
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
        title={'Get Started'}
        pressHandler={pressHandler}
      />
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
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: -SIZES.medium,
    gap: SIZES.small
  },
  imageCard: {
    top: -SIZES.medium,
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.cardBg
  },
  image: {
    borderRadius: SIZES.medium,
    width: 200,
    height: 200
  },
  textContainer: {
    marginVertical: SIZES.xLarge + 6,
    padding: SIZES.small,
    margin: SIZES.small
  },
  mainText: {
    fontSize: SIZES.xLarge + 5,
    color: COLORS.white,
    fontFamily: FONTS.bold,
    textAlign: 'center'
  },
  subText: {
    color: COLORS.gray,
    textAlign: 'center',
    marginVertical: SIZES.small
  },
  buttonStyle: {
    backgroundColor: COLORS.second,
    paddingHorizontal: SIZES.xLarge + 10,
    paddingVertical: SIZES.small,
    borderRadius: SIZES.small
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large
  }
})

export default Welcome
