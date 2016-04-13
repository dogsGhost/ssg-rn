import React, {
  Component,
  Text,
  StyleSheet,
  TextInput,
  View
} from 'react-native'

import Button from './Button'

import { em, colors } from './../styles/main'

export default class Flashcards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      words: []
    }

    this._handleSelection = this._handleSelection.bind(this)
  }

  _handleSelection(option) {
    option = option.toLowerCase()
console.log('clicked', option);
  }

  _getBg(color, index) {
    const key = [0, 3, 7, 'b', 'f']
    return color.replace('F', key[index])
  }

  _getButtons() {
    const color = colors.primaryColor
    const options = ['all', ...Object.keys(this.props.db)]
    const buttons = options.map((el, index, src) => {
      let bg = this._getBg(color, index)

      return (
        <Button
          btnStyles={{ backgroundColor: bg }}
          clickHandler={this._handleSelection}
          key={index}
        >
          {el.toUpperCase()}
        </Button>
      )
    })

    return buttons
  }

  render() {
    const val = 'Let\'s Practice!'
    return (
      <View style={s.container}>
        <Text style={s.p}>{val}</Text>
        {this._getButtons()}
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: em(3.5)
  },

  p: {
    fontSize: em(1),
    textAlign: 'center',
    padding: em(1)
  },
})
