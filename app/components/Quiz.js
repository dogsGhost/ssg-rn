import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import Question from './Question'
import ResultsView from './ResultsView'
import Button from './Button'

import getPhrases from './../phrases'
import { em, colors } from './../styles/main'

export default class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: '10', // default number of questions
      questions: [], // start with no questions
      answers: []
    }

    // scope our functions to the class
    this._handleNewQuiz = this._handleNewQuiz.bind(this)
    this._handleStartQuiz = this._handleStartQuiz.bind(this)
    this._handleSubmitAnswer = this._handleSubmitAnswer.bind(this)
  }

  // start a new quiz by resetting the state
  _handleNewQuiz() {
    this.setState({ questions: [], answers: [] })
  }

  _handleStartQuiz() {
    // generate an array of questions for the quiz
    let questions = getPhrases({
      count: Math.floor(Number(this.state.count)),
      src: this.props.db
    })
    // set questions to state, triggering start of quiz
    this.setState({ questions })
  }

  _handleSubmitAnswer(answer) {
    this.setState({
      answers: this.state.answers.concat([answer])
    })
  }

  render() {
    let qLength = this.state.questions.length
    let aLength = this.state.answers.length

    // If the last question has been answered.
    if (aLength && aLength === qLength) {
      return (
        <ResultsView
          answers={this.state.answers}
          onNewQuiz={this._handleNewQuiz}
        />
      )
    }

    return (
      <View style={s.container} keyboardShouldPersistTaps={false}>
        <View style={s.instructions}>
          <Text style={s.p}>Quiz length: </Text>
          {
            qLength ?
              <Text style={s.p}>{this.state.count}</Text>:
              <TextInput
                keyboardType='numeric'
                maxLength={2}
                onChangeText={(count) => this.setState({ count })}
                style={s.instructionsCount}
                value={this.state.count}
              />
          }
          <Text style={s.p}>Do not use character accents.</Text>
          <Text style={s.p}>Dropped pronouns are optional.</Text>
        </View>
        {
          qLength ?
            <Question
              questions={this.state.questions}
              onAnswer={this._handleSubmitAnswer}
            /> :
            <Button clickHandler={this._handleStartQuiz}>START</Button>
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

  instructions: {
    margin: em(1),
    marginTop: em(0.5),
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  instructionsCount: {
    height: em(2),
    width: em(3),
    borderColor: colors.primaryColor,
    borderWidth: 2,
    textAlign: 'center'
  },

  p: {
    fontSize: em(1),
    lineHeight: em(1.5)
  }
})
