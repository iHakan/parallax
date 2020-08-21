import {StyleSheet, Dimensions} from 'react-native';

//Initiallized the dimensions for further styling on width and height;
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

//Styling content here;
const style = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageBackground: {
    marginBottom: 5,
    width: w * 1,
    height: h * 0.5,
    alignItems:'center'
  },
  text: {
    color: '#eee',
    fontSize: 50,
    fontWeight:'bold',
  },
});

export {style};
