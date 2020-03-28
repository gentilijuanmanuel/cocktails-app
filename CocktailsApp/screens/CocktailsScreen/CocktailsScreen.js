import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SearchBar } from 'react-native-elements';

import { DrinksList } from '../../components/index';

import BASE_URL from '../../api/urls';
import colors from '../../constants/colors';

import styles from './styles';

const CocktailsScreen = () => {
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [drinksResponse, setDrinksResponse] = useState(null);
  const [drinkEnteredValue, setDrinkEnteredValue] = useState('');

  useEffect(() => {
    if (drinkEnteredValue.length > 3) {
      setIsSearchLoading(true);
      fetch(BASE_URL + drinkEnteredValue)
        .then((response) => response.json())
        .then((responseJson) => {
          setDrinksResponse(responseJson);
          setIsSearchLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsSearchLoading(false);
        });
    }
  }, [drinkEnteredValue]);

  const updateSearch = (searchValue) => setDrinkEnteredValue(searchValue);

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
        showLoading={isSearchLoading}
        onCancel={() => updateSearch('')}
        round
        value={drinkEnteredValue}
      />
      <DrinksList
        isLoading={isSearchLoading}
        enteredValue={drinkEnteredValue}
        response={drinksResponse}
      />
    </LinearGradient>
  );
};

export default CocktailsScreen;
