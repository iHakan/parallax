import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {style} from './style';
import data from './movieGenresList.json';

export default class ParallaxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [], //initially our data source is empty
      isLoading: true, //Loading animation is working
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
    return (
      <View style={style.con}>
        <ImageBackground style={style.imageBackground} source={{uri: `${item.image}`}}>
          <Text style={style.text}>{item.genre}</Text>
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
          <FlatList data={dataSource} renderItem={this._renderItem} />
        )}
      </View>
    );
  }
}
