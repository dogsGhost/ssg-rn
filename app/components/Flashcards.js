import React, {
  Component,
  Text,
  StyleSheet,
  TextInput,
  View
} from 'react-native'

import Button from './Button'
import Cards from './Cards'

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
    let db = this.props.db
    let data = db.noun
    // TODO enable options, requires new database schema
    // determine what dataset to use
    // if (option == 'all') {
    //   data = [...db.noun, ...db.pronoun, ...db.verb]
    // }
    // if (option === 'nouns') {
    //   data = [...db.noun, ...db.pronoun]
    // }
    // if (option === 'verbs') {
    //   data = db.verb
    // }
    // we only want 12 items
    if (data.length > 12) {
      // TODO randomize the items instead of first 12
      data = data.slice(0, 11)
    }
console.log(data);
    // start review
    this.setState({ words: data })

  }

  _getButtons() {

    const options = ['nouns', 'verbs', 'all']
    const buttons = options.map((el, index, src) => {
      let bg = colors.primaryColor.replace('F', 'a')
      if (index === 0) bg = colors.primaryColor
      if (index === src.length - 1) bg = colors.green

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
    const val = `Let's Practice!`
    const hasWords = this.state.words.length

    return (
      <View style={styles.container}>
        <Text style={styles.p}>{val}</Text>
        {
          hasWords ?
            <Cards
              words={this.state.words}
              det={this.props.db.determiner}
            /> :
            this._getButtons()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: em(3.5)
  },

  p: {
    fontSize: em(1),
    textAlign: 'center',
    padding: em(1)
  },
})
