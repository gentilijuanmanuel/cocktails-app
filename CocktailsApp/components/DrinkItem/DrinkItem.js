import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const DrinkItem = (props) => {
  const { drink } = props;

  return (
    <View key={drink.item.idDrink} style={styles.drinkItemContainer}>
      <Image
        style={styles.drinkImage}
        source={{ uri: drink.item.strDrinkThumb }}
      />
      <Text
        style={styles.drinkTitle}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {drink.item.strDrink}
      </Text>
    </View>
  );
};

DrinkItem.propTypes = {
  drink: PropTypes.object.isRequired
};

export default DrinkItem;
