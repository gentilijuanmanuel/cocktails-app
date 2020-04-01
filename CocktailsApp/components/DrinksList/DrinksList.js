import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View
} from 'react-native';

import { DrinkItem } from '../index';
import colors from '../../constants/colors';
import styles from './styles';

const DrinksList = ({ isLoading, enteredValue, drinks }) => {
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
  } else if (drinks != null) {
    display = (
      <FlatList
        style={styles.drinksFlatView}
        data={drinks}
        keyExtractor={(drink) => drink.idDrink}
        renderItem={(drink) => <DrinkItem drink={drink} />}
      />
    );
  }

  return <View style={styles.screenContainer}>{display}</View>;
};

export default DrinksList;
