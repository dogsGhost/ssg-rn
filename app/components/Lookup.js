import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import { em, colors } from './../styles/main'

const Match = (props) => {
  let esText = ''
  let enText = ''
  const esp = props.word.es
  if (esp) {
    if (typeof esp === 'string') {
      esText = esp
      enText = props.word.en
    } else {
      for (let key in esp) {
        esText += `${key}: ${esp[key]}, `
      }
    }
  } else {
    esText = props.word
  }
  return (
    <View>
      {
        enText ?
          <Text style={[s.p, s.result]}>{enText}</Text> :
          false
      }
      <Text style={[s.p, s.result]}>{esText}</Text>
    </View>
  )
}

export default class Lookup extends Component {
  constructor(props) {
    super(props)

    this.dict = []

    for (let key in props.db) {
      this.dict = [...this.dict, ...props.db[key]]
    }
    this.dict.sort((a, b) => {
      if (a.en.toLowerCase() < b.en.toLowerCase()) return -1
      if (a.en.toLowerCase() > b.en.toLowerCase()) return 1
      return 0
    })

    this.state = {
      word: '',
      match: false
    }
  }

  _findWord() {
    const noMatch = 'Sorry, looks like we haven\'t learned that word yet!'
    const word = this.state.word.toLowerCase()
    const match = this.dict.find((el) => {
      return el.en.includes(word)
    })

    return match ? match : noMatch
  }

  render() {
    return (
      <View style={s.container}>
        <Text style={s.p}>What word are you looking for?</Text>
        <TextInput
          onChangeText={(word) => {
            this.setState({ word })
          }}
          style={s.wordInput}
          value={this.state.word}
        />
        {
          this.state.word ?
            <Match word={this._findWord()} /> :
            false
        }
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
    padding: em(0.88),
    textAlign: 'center',
  },

  wordInput: {
    textAlign: 'center',
    borderColor: colors.primaryColor,
    borderWidth: 2,
    fontSize: em(1),
    height: em(2.5),
    marginLeft: em(1),
    marginRight: em(1),
  },

  result: {
    fontSize: em(1.25),
    fontWeight: 'bold'
  }
})
