import React, { StyleSheet, Text } from 'react-native'
import { em, colors } from './../styles/main'

export default Header = () => (
  <Text style={s.mainHeading}>Spanish Study Guide</Text>
)

const s = StyleSheet.create({
  mainHeading: {
    backgroundColor: colors.primaryColor,
    color: colors.white,
    fontSize: em(1.5),
    lineHeight: em(1.5),
    padding: em(2),
    textAlign: 'center'
  }
})
