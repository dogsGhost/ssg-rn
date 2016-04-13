import { StyleSheet } from 'react-native';

const white = '#fff';
const lightGrey = '#ECECEC';
const grey = '#BDC3C7';
const primaryColor = '#F64747';
const green = '#00B16A';
const red = '#BF000F';

const fontSize = 16;
const em = (num) => fontSize * num;

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },

  mainHeading: {
    backgroundColor: primaryColor,
    paddingTop: em(2),
    paddingBottom: em(1.25),
    color: white,
    fontSize: em(1.5),
    lineHeight: em(1.5),
    textAlign: 'center'
  },

  mainFooter: {
    fontSize: em(0.8),
    padding: em(1)
  },

  btn: {
    backgroundColor: primaryColor,
    borderRadius: em(0.375),
    padding: em(0.75),
    margin: em(1)
  },

  btnStart: {
    marginLeft: em(1),
    marginBottom: em(1)
  },

  btnText: {
    color: white,
    textAlign: 'center'
  },

  instructions: {
    margin: em(1),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },

  instructionsCount: {
    height: em(2),
    width: em(3),
    borderColor: primaryColor,
    borderWidth: 2,
    textAlign: 'center'
  },

  p: {
    fontSize: em(1),
    lineHeight: em(1.5)
  },

  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: em(0.5)
  },

  progressBar1: {
    backgroundColor: primaryColor
  },

  progressBar2: {
    backgroundColor: grey
  },

  quizContainer: {
    padding: em(1.5),
    backgroundColor: lightGrey
  },

  quizNumber: {
    position: 'absolute',
    top: em(0.25),
    left: em(0.25),
    fontSize: em(0.8),
    color: primaryColor
  },

  quizText: {
    marginBottom: em(1),
    fontSize: em(1.25)
  },

  quizInput: {
    marginBottom: em(1),
    padding: em(.5),
    height: em(2),
    borderColor: grey,
    borderWidth: 2,
    backgroundColor: white
  },

  quizScore: {
    marginLeft: em(1),
    marginBottom: em(1),
    fontSize: em(1.2)
  },

  answerItem: {
    marginBottom: em(1),
    padding: em(1),
    paddingBottom: em(1.5),
    borderTopWidth: em(0.5)
  },

  answerLine: {
    lineHeight: em(1.375),
    fontSize: em(1),
    paddingLeft: em(0.5)
  },

  answerPhrase: {
    paddingLeft: 0,
    marginBottom: em(0.125)
  },

  correct: {
    backgroundColor: lightGrey,
    borderTopColor: green
  },

  incorrect: {
    backgroundColor: lightGrey,
    borderTopColor: red
  }
});
