import React, {
  AppRegistry,
  Component,
  NavigatorIOS
} from 'react-native'
import Home from './app/components/Home'

class SpanishStudyGuide extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{ flex: 1 }}
        initialRoute={{
          component: Home,
          title: 'Home'
        }}
      />
    );
  }
}

AppRegistry.registerComponent('SpanishStudyGuide', () => SpanishStudyGuide)
