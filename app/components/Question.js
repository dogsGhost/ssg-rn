import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import Button from './Button'
import QuestionText from './QuestionText'

import { em, colors } from './../styles/main'
import utils from '../utils'

export default class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curIndex: 0,
      curAnswer: ''
    }

    this._handleSubmit = this._handleSubmit.bind(this)
  }

  // show the next phrase
  _handleSubmit() {
    let inputValue = utils.clean(this.state.curAnswer)
    let correctAnswer = this.props.questions[this.state.curIndex].translation

    if (!inputValue) return

    // Check for exact match
    let isCorrect = inputValue === correctAnswer ? true : false
    // Check for dropped pronoun
    if (!isCorrect) {
      correctAnswer = correctAnswer.split(' ').slice(1).join(' ')
      isCorrect = inputValue === correctAnswer ? true : false
    }

    let answerObj = {
      inputValue,
      isCorrect,
      srcItem: this.props.questions[this.state.curIndex]
    }

    // pass answer up
    this.props.onAnswer(answerObj)

    // we will update answer array clear input field
    // also move to next question if it wasn't the last one
    if (this.state.curIndex < this.props.questions.length - 1) {
      // save values
      this.setState({
        curAnswer: '',
        curIndex: this.state.curIndex + 1
      })
    }
  }

  render() {
    let i = this.state.curIndex
    let data = this.props.questions
    let dataLen = data.length
    let progressWidth1 = { flex: i / dataLen }
    let progressWidth2 = { flex: 1 - progressWidth1.flex }

    return (
    <View>
      <View style={s.progressContainer}>
        <View style={[s.progressBar1, progressWidth1]}></View>
        <View style={[s.progressBar2, progressWidth2]}></View>
      </View>
      <View style={s.quizContainer}>
        <Text style={s.quizNumber}>
          {this.state.curIndex + 1 + ''}
        </Text>
        <QuestionText styles={s.quizText}>
          {utils.capitalize(data[i].english)}.
        </QuestionText>
        <TextInput
          onChangeText={(curAnswer) => this.setState({ curAnswer })}
          style={s.quizInput}
          value={this.state.curAnswer}
        />
        <Button clickHandler={this._handleSubmit}>
          {i === dataLen - 1 ? 'DONE' : 'NEXT'}
        </Button>
      </View>
    </View>
    )
  }
}

const s = StyleSheet.create({
    progressContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      height: em(0.5)
    },

    progressBar1: {
      backgroundColor: colors.primaryColor
    },

    progressBar2: {
      backgroundColor: colors.grey
    },

    quizContainer: {
      paddingTop: em(0.5),
      backgroundColor: colors.lightGrey
    },

    quizNumber: {
      position: 'absolute',
      top: em(0.25),
      left: em(0.25),
      fontSize: em(0.8),
      color: colors.primaryColor
    },

    quizText: {
      margin: em(1),
      fontSize: em(1)
    },

    quizInput: {
      margin: em(1),
      marginTop: 0,
      padding: em(.5),
      height: em(2),
      borderColor: colors.grey,
      borderWidth: 2,
      backgroundColor: colors.white
    },

    quizScore: {
      marginLeft: em(1),
      marginBottom: em(1),
      fontSize: em(1.2)
    },
})

Question.propTypes = {
  questions: PropTypes.array.isRequired
}
