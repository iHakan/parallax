import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  Text,
  View,
  ImageBackground,
  Animated,
} from 'react-native';
import {style} from './style';
import data from './movieGenresList.json';
import {h} from './constants';

const barHeight = StatusBar.currentHeight;
const dataLength = data.length;

export default class ParallaxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [], //initially our data source is empty
      isLoading: true, //Loading animation is working
      textAnim: new Animated.Value(0),
    };
  }

  //Starting the page
  componentDidMount() {
    this.setState({
      dataSource: data, //Fetching the data from the json file
      isLoading: false, //Loading animation stopped.
    });
  }

  //To render each photo individually we created a function
  _renderItem = ({item, index}) => {
    const movingText = this.state.textAnim.interpolate({
      inputRange: [0, 320 * dataLength],
      outputRange: [0, h * 0.38],
      extrapolate: 'clamp',
    });
    return (
      <View style={style.con}>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
          translucent={true}
        />
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
      <View style={{flex: 1, paddingTop: barHeight}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          //Rendering everything inside the FlatList to have a scroll effect
          <Animated.FlatList
            data={dataSource}
            bounce={true}
            renderItem={this._renderItem}
            keyExtractor={(item) => item.id}
            scrollEventThrottle={16}
            onScroll={Animated.event(
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
            )}
          />
        )}
        <View
          style={{height: barHeight, backgroundColor: 'white'}}>
          <Text style={{color: 'white'}} >FOOTER</Text>
        </View>
      </View>
    );
  }
}
