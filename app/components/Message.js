import React, { StyleSheet, Text } from 'react-native'

const Message = (props) => (
  <Text style={s[props.msgType]}>
    {props.children}
  </Text>
)

const s = StyleSheet.create({
  error: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Message
