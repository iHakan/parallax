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
  text: {
    width: w*0.7,
    color: '#eee',
    fontSize: 50,
    position:'relative',
    fontWeight:'bold',
    margin: 'auto',
  },
  con: {
    flex: 1,
    padding: 0,
    marginBottom: 0,
    //borderWidth: 1,
    alignItems: 'center',
    borderColor: '#eee',
  },
  imageBackground: {
    marginBottom: 5,
    width: w * 1.5,
    height: h * 0.5,
  },
});

export {style};
