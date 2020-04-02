import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

import { setDrinkEnteredValue, fetchDrinks } from '../../actions/actionCreators';

import { DrinksList } from '../../components/index';

import colors from '../../constants/colors';

import styles from './styles';

const CocktailsScreen = ({
  isLoading, drinkEnteredValue, drinks, setDrinkEnteredValueHandler, fetchDrinksHandler
}) => {
  useEffect(() => {
    if (drinkEnteredValue.length > 3) {
      fetchDrinksHandler(drinkEnteredValue);
    }
  }, [drinkEnteredValue]);

  const updateSearch = (searchValue) => setDrinkEnteredValueHandler(searchValue);

  return (
    <LinearGradient
      style={styles.screenContainer}
      colors={[
        colors.primary,
        colors.accent
      ]}
    >
      <SearchBar
        placeholder="Search drinks..."
        onChangeText={updateSearch}
        lightTheme
        style={styles.searchBarStyle}
        containerStyle={styles.searchBarContainerStyle}
        inputStyle={styles.inputStyle}
        showLoading={isLoading}
        onCancel={() => updateSearch('')}
        round
        value={drinkEnteredValue}
      />
      <DrinksList
        isLoading={isLoading}
        enteredValue={drinkEnteredValue}
        drinks={drinks}
      />
    </LinearGradient>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  drinkEnteredValue: state.drinkEnteredValue,
  drinks: state.drinks
});

const mapDispatchToProps = (dispatch) => ({
  setDrinkEnteredValueHandler: (drinkEnteredValue) => dispatch(setDrinkEnteredValue(drinkEnteredValue)),
  fetchDrinksHandler: (drinkEnteredValue) => dispatch(fetchDrinks(drinkEnteredValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsScreen);
