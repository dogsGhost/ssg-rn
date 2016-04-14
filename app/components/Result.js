import React, {
  PropTypes,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { em, colors } from './../styles/main'

export default Result = (props) => {
  // set style based on if answer is correct or not
  let itemStyle = props.answer.isCorrect ? styles.correct : styles.incorrect
  let srcItem = props.answer.srcItem

  return (
    <View style={[styles.answerItem, itemStyle]}>
        <Text style={[styles.answerLine, styles.answerPhrase]}>
          <Text style={{ fontWeight: 'bold' }}>Phrase {props.index + 1 + ''}:</Text> {srcItem.english}
        </Text>
        <Text style={styles.answerLine}>
          <Text>Your answer</Text>: {props.answer.inputValue}
        </Text>
        {
          !props.answer.isCorrect ?
            <Text style={[styles.answerLine, { fontWeight: 'bold' }]}>
              Correct answer: {srcItem.translation}
            </Text> :
            false
        }
    </View>
  )
}

const styles = StyleSheet.create({
  answerItem: {
    marginBottom: em(1),
    padding: em(1),
    paddingBottom: em(1.5),
    borderTopWidth: em(0.5)
  },

  answerLine: {
    lineHeight: em(1.375),
    fontSize: em(0.88),
    paddingLeft: em(0.5)
  },

  answerPhrase: {
    paddingLeft: 0,
    marginBottom: em(0.125)
  },

  correct: {
    backgroundColor: colors.lightGrey,
    borderTopColor: colors.correct
  },

  incorrect: {
    backgroundColor: colors.lightGrey,
    borderTopColor: colors.incorrect
  }
})

Result.propTypes = {
  answer: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}
