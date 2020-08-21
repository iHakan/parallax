import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {style} from './style';
import ParallaxList from './ParallaxList';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={style.mainContainer}>
        <ParallaxList />
      </SafeAreaView>
    );
  }
}

export default App;
