import React, {
  Animated,
  Component,
  PropTypes,
  Text
} from 'react-native'

export default class QuestionText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(1)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.children[0] !== this.props.children[0]
  }

  componentWillUpdate() {
    this.state.fadeAnim.setValue(0)
  }

  componentDidUpdate() {
    Animated.timing(this.state.fadeAnim, { toValue: 1 }).start()
  }

  render() {
    return(
      <Animated.Text style={[
        this.props.styles,
        { opacity: this.state.fadeAnim }
      ]}>
        {this.props.children}
      </Animated.Text>
    )
  }
}

QuestionText.propTypes = {
  styles: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired
}
