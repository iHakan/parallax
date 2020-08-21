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
    top: '10%',
    color: 'dodgerblue',
    fontSize: 40,
  },
  con: {
    flex: 0.5,
    padding: 0,
    marginBottom: 5,
    //borderWidth: 1,
    alignItems: 'center',
    borderColor: '#eee',
  },
  photos: {
    width: w * 1,
    height: h * 0.5,
    margin: 0,
    padding: 0,
  },
});

export {style};
