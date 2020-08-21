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
    alignItems:'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight:'bold',
    //backgroundColor: 'rgba(0,0,0,0.5)',
    width: w * 1,
    height: h * 0.5,
    textAlign:'center',
    paddingTop: 10
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});

export {style};
