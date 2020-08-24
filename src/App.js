import React from 'react';
import {SafeAreaView} from 'react-native';
import {style} from './style';
import ParallaxList from './ParallaxList';

const App = () => {
  return (
    <SafeAreaView style={style.mainContainer}>
      <ParallaxList />
    </SafeAreaView>
  );
};

export default App;
