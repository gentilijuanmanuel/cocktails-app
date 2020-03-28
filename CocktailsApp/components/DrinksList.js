import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DrinkItem from './DrinkItem';

import colors from '../constants/colors';

const DrinksList = ({ isLoading, enteredValue, response }) => {
  let display = <Text style={styles.description}>No drinks found :(</Text>;

  if (isLoading) {
    display = (
      <ActivityIndicator
        style={styles.activityIndicatorStyle}
        size="large"
        color={colors.white}
      />
    );
  } else if (enteredValue === '' || enteredValue.length <= 3) {
    display = <Text style={styles.description}>Please, enter more than 3 characters in order to perform a search.</Text>;
  } else if (response && response.drinks) {
    display = (
      <FlatList
        style={styles.drinksFlatView}
        data={response.drinks}
        keyExtractor={(drink) => drink.idDrink}
        renderItem={(drink) => <DrinkItem drink={drink} />}
      />
    );
  }

  return <View style={styles.screenContainer}>{display}</View>;
};

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

export default DrinksList;
