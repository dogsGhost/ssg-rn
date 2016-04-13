import React, {
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'
import { em, colors } from './../styles/main'

export default Button = props => {
  const btnStyles = props.btnStyles || {}
  const btnTextStyles = props.btnTextStyles || {}

  return (
    <TouchableHighlight
      onPress={() => props.clickHandler(props.children)}
      style={[s.btn, btnStyles]}
      underlayColor={props.activeBtnColor || '#FF7070'}
    >
      <Text style={[s.btnText, btnTextStyles]}>
        {props.children}
      </Text>
    </TouchableHighlight>
  )
}

const s = StyleSheet.create({
  btn: {
    backgroundColor: colors.primaryColor,
    padding: em(1.75)
  },

  btnText: {
    color: colors.white,
    fontSize: em(1),
    textAlign: 'center'
  }
})

Button.propTypes = {
  activeBtnColor: PropTypes.string,
  btnStyles: PropTypes.object,
  btnTextStyles: PropTypes.object,
  children: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}
