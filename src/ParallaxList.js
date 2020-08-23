import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  ScrollView,
  View,
  ImageBackground,
  Animated,
} from 'react-native';
import {style} from './style';
import data from './movieGenresList.json';

export default class ParallaxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [], //initially our data source is empty
      isLoading: true, //Loading animation is working
      textAnim: new Animated.Value(0),
    };
  }

  //Animation
  animate() {
    //alert('Alert is working for scroll!');
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              y: this.state.textAnim,
            },
          },
        },
      ],
      {useNativeDriver: true},
    );
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
    const movingText = this.state.textAnim.interpolate({
      inputRange: [0, 5000],
      outputRange: [0, 300],
    });
    return (
      <View style={style.con}>
        <ImageBackground
          style={style.imageBackground}
          source={{uri: `${item.image}`}}>
          <View style={style.overlay} />
          <Animated.ScrollView
            style={{
              transform: [{translateY: movingText}],
            }}>
            <Text style={style.text}>{item.genre}</Text>
          </Animated.ScrollView>
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
          <Animated.FlatList
            data={dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item) => item.id}
            scrollEventThrottle={16}
            onScroll={this.animate.bind(this)}
          />
        )}
      </View>
    );
  }
}
