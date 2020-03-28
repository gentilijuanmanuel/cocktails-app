import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drinkItemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  drinkImage: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  drinkTitle: {
    fontSize: 20,
    margin: 15,
    fontFamily: 'Lato-Regular'
  }
});

export default styles;
