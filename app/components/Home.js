import React, {
  ActivityIndicatorIOS,
  AsyncStorage,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Header from './Header'
import Button from './Button'
import Message from './Message'

import Flashcards from './Flashcards'
import Lookup from './Lookup'
import Quiz from './Quiz'

import config from '../config'
import utils from '../utils'
import { em, colors } from './../styles/main'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      isLoading: false
    }

    this._initOption = this._initOption.bind(this)
  }

  _initOption(routeKey) {
    this._getDictionary(routeKey)
  }

  _goToNextRoute(routeKey, result) {
    const routes = {
      'FLASHCARDS': Flashcards,
      'QUIZ': Quiz,
      'DICTIONARY': Lookup
    }
    const nextRoute = routes[routeKey]
    const data = JSON.parse(result)
    if (nextRoute) {
      this.props.navigator.push({
        component: nextRoute,
        title: utils.capitalize(routeKey.toLowerCase()),
        passProps: { db: data }
      })
    }
  }

  _getDictionary(routeKey) {
    this.setState({ isLoading: true, error: false })
    AsyncStorage.getItem('ES_DICT')
    .then(result => {
      if (result) {
console.log('data from storage');
        this.setState({
          isLoading: false
        })
        this._goToNextRoute(routeKey, result)
      } else {
        this._fetchDictionary(config.url, routeKey)
      }
    })
    .catch(err => {
console.log(err);
      this.setState({
        error: true,
        isLoading: false
      })
    })
  }

  _fetchDictionary(url, routeKey) {
    fetch(`${url}.json`)
      .then(res => res.json())
      .then(data => {
        AsyncStorage.setItem('ES_DICT', JSON.stringify(data))
console.log('data from url');
        this.setState({
          dictionary: data,
          isLoading: false
        })
        this._goToNextRoute(routeKey, data)
      })
      .catch(err => {
console.log(err);
        this.setState({
          error: true,
          isLoading: false
        })
      })
  }

  render() {
    const error =
      this.state.error ?
        <Message msgType='error'>
          Sorry, unable to load dictionary at this time.
        </Message> :
        null

    return (
      <View style={s.container}>
        <Header />

        <Button
          clickHandler={this._initOption}
          btnStyles={{ backgroundColor: '#a64747' }}
        >
          FLASHCARDS
        </Button>

        <Button
          clickHandler={this._initOption}
          btnStyles={{ backgroundColor: colors.brown }}
          activeBtnColor='#767070'
        >
          QUIZ
        </Button>

        <Button
          clickHandler={this._initOption}
          btnStyles={{ backgroundColor: colors.green }}
          activeBtnColor='#067070'
        >
          DICTIONARY
        </Button>

        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color='#222'
          size='large' />
        {error}
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: em(3.5)
  },
})
