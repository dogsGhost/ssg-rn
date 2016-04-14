import React, {
  Component,
  Text,
  StyleSheet,
  View
} from 'react-native'

import FlipCard from 'react-native-flip-card'

import utils from './../utils'
import { em, colors } from './../styles/main'

export default class Cards extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const word = utils.sample(this.props.words)

    return (
      <FlipCard
        alignHeight={true}
        alignWidth={true}
        flipHorizontal={true}
        flipVertical={false}
        friction={7}
        style={styles.card}
      >
        {/* Face Side */}
        <View style={[styles.face, styles.view]}>
          <Text style={[styles.word, styles.wordF]}>
            {word.es}
          </Text>
        </View>
        {/* Back Side */}
        <View style={[styles.back, styles.view]}>
          <Text style={[styles.word, styles.wordB]}>
            {word.en}
          </Text>
        </View>
      </FlipCard>
    )
  }
}

const styles = StyleSheet.create({
  face: {
    backgroundColor: colors.primaryColor,
  },

  back: {
    backgroundColor: colors.white,
  },

  view: {
    borderRadius: em(0.4),
    paddingTop: em(1.5),
    paddingBottom: em(1.5),
  },

  word: {
    textAlign: 'center',
    fontSize: em(1.5)
  },

  wordF: {
    color: colors.white
  },

  wordB: {
    color: colors.primaryColor
  },

  card: {
    borderColor: colors.primaryColor,
    borderWidth: 2,
    borderRadius: em(0.5),
    margin: em(1)
  }
})
