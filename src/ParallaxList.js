import React from 'react';
import {ActivityIndicator, FlatList, Text, View, Image} from 'react-native';
import {style} from './style';
import data from './movieGenresList.json';

export default class ParallaxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: data,
      isLoading: false,
    });
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={style.con}>
        <Image style={style.photos} source={{uri: `${item.image}`}} />
        <Text style={style.text}>{item.genre}</Text>
      </View>
    );
  };

  render() {
    const {dataSource, isLoading} = this.state;

    return (
      <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList data={dataSource} renderItem={this._renderItem} />
        )}
      </View>
    );
  }
}
