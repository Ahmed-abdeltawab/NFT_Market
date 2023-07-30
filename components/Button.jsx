import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ title, textStyle, icon, buttonStyle, pressHandler }) => {
  const RenderContentIconOrText = () => {
    if (title) return <Text style={textStyle}>{title}</Text>
    else return icon
  }
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={pressHandler && pressHandler}
    >
      <RenderContentIconOrText />
    </TouchableOpacity>
  )
}

export default Button
