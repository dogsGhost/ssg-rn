import React, {
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Result from './Result'
import Button from './Button'

import { em, colors } from './../styles/main'

export default ResultsView = (props) => {
  let dataLen = props.answers.length
  let numCorrect = props.answers.filter(answer => answer.isCorrect).length
  let percentage = Math.round(numCorrect / dataLen * 100)
  let answerNodes = props.answers.map((answer, index) => {
    return (
      <Result
        answer={answer}
        index={index}
        key={index}
      />
    )
  })

  return (
    <View style={s.container}>
      <Text style={s.quizScore}>
        <Text style={{ fontWeight: 'bold' }}>You scored {percentage}%</Text> ({numCorrect} out of {dataLen})
      </Text>
      <Button clickHandler={props.onNewQuiz}>
        NEW QUIZ
      </Button>
      <ScrollView style={{ flex: 1 }}>
        {answerNodes}
      </ScrollView>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: em(3.5)
  },

  quizScore: {
    padding: em(1),
    fontSize: em(1)
  },
})

ResultsView.propTypes = {
  answers: PropTypes.array.isRequired,
  onNewQuiz: PropTypes.func.isRequired
}
