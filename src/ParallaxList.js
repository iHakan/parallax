import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Animated,
  Easing,
  Dimensions
} from 'react-native';
import {style} from './style';
import data from './movieGenresList.json';

export default class ParallaxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [], //initially our data source is empty
      isLoading: true, //Loading animation is working
      scrollY: new Animated.Value(0)
    };
  }

   
  //Moving text function 
  _movingText = () => {
    //console.log("Fonksiyon çalışıyor!");
    Animated.timing(this.state.scrollY,{
      toValue:300,
      duration: 1000,
      asing: Easing.cubic,
    }).start();
  }

  //Starting the page
  componentDidMount() {
    this.setState({
      dataSource: data, //Fetching the data from the json file
      isLoading: false, //Loading animation stopped.
    });
  }
  //Text'imize animasyon ekleyeceğiz.
  //onScroll olduğunda textimizin yeri belli bir yere kadar ease olarak Y direction'da değişecek
  //Dimensions kullanarak height'ını değiştireceğiz
  //To render each photo individually we created a function
  _renderItem = ({item, index}) => {
    return (
      <View style={style.con}>
        <ImageBackground  style={style.imageBackground} source={{uri: `${item.image}`}}>
        <View style={style.overlay}/>
          <Animated.View style={{top: this.state.scrollY}}>
            <Text style={style.text}>{item.genre}</Text>
          </Animated.View>
        </ImageBackground>
      </View>
    );
  };

  render() {
    const {dataSource, isLoading} = this.state;

    return (
      <View style={{flex: 1, padding: 0}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          //Rendering everything inside the FlatList to have a scroll effect
          <FlatList data={dataSource} renderItem={this._renderItem} onScroll={this._movingText}/>
        )}
      </View>
    );
  }
}
