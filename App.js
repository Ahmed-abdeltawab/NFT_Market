import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './screens/Welcome'
import Home from './screens/Home.jsx'
import NFTDetails from './screens/NFTDetails.jsx'
import { useFonts } from 'expo-font'
function App () {
  const [fontsLoaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf')
  })
  if (!fontsLoaded) return null

  const Stack = createNativeStackNavigator()

  return (
    <>
      <StatusBar style='light' animated={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Welcome'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='NFT-Details' component={NFTDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
