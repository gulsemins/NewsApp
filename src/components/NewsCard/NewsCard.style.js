import {Dimensions, StyleSheet, View} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 7,
  },
  description: {
    marginTop: 3,
    padding: 7,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    margin: 2,
  },
});
