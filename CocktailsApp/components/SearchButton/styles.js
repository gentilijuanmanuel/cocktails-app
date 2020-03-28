import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  searchButtonContainer: {
    alignItems: 'center'
  },
  searchCocktailsButton: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10
  },
  findCocktailText: {
    color: 'grey',
    alignSelf: 'center',
    margin: 5,
    fontFamily: 'Lato-Regular'
  }
});

export default styles;
