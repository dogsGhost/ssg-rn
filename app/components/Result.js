import React, {
  PropTypes,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { em, colors } from './../styles/main'

export default Result = (props) => {
  // set style based on if answer is correct or not
  let itemStyle = props.answer.isCorrect ? s.correct : s.incorrect
  let srcItem = props.answer.srcItem

  return (
    <View style={[s.answerItem, itemStyle]}>
        <Text style={[s.answerLine, s.answerPhrase]}>
          <Text style={{ fontWeight: 'bold' }}>Phrase {props.index + 1 + ''}:</Text> {srcItem.english}
        </Text>
        <Text style={s.answerLine}>
          <Text>Your answer</Text>: {props.answer.inputValue}
        </Text>
        {
          !props.answer.isCorrect ?
            <Text style={[s.answerLine, { fontWeight: 'bold' }]}>
              Correct answer: {srcItem.translation}
            </Text> :
            false
        }
    </View>
  )
}

const s = StyleSheet.create({
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
