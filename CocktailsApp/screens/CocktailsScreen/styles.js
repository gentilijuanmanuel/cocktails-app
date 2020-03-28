import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  searchBarContainerStyle: {
    backgroundColor: colors.primary,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },
  inputStyle: {
    fontFamily: 'Lato-Regular'
  }
});

export default styles;
