import {StyleSheet} from 'react-native';
import {w, h} from './constants';

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
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export {style};
