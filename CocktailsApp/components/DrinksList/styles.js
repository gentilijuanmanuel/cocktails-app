import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  activityIndicatorStyle: {
    margin: 20
  },
  drinksFlatView: {
    flex: 1
  },
  description: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    margin: 20
  }
});

export default styles;
