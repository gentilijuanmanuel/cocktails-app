import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  appBrandContainer: {
    alignItems: 'center'
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cocktailText: {
    fontSize: 40,
    color: colors.white,
    fontFamily: 'Lato-Bold'
  },
  finderText: {
    fontSize: 40,
    color: colors.white,
    fontFamily: 'Lato-Regular'
  }
});

export default styles;
