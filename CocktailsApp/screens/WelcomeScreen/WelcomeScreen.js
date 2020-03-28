import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';
import { AppBrand, SearchButton } from '../../components/index';

import styles from './styles';

const WelcomeScreen = ({ navigation }) => {
  const searchCocktailsHandler = () => navigation.navigate('CocktailsScreen');

  return (
    <LinearGradient
      style={styles.screenContainer}
      colors={[
        colors.primary,
        colors.accent
      ]}
    >
      <AppBrand />
      <SearchButton searchCocktailsHandler={searchCocktailsHandler} />
    </LinearGradient>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default WelcomeScreen;
