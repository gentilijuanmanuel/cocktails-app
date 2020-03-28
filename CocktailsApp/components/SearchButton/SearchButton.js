import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import styles from './styles';

const SearchButton = ({ searchCocktailsHandler }) => (
  <View style={styles.searchButtonContainer}>
    <TouchableOpacity style={styles.searchCocktailsButton} onPress={searchCocktailsHandler}>
      <Icon name="search" size={25} color={colors.primary} />
      <Text style={styles.findCocktailText}>Search your favorite cocktail</Text>
    </TouchableOpacity>
  </View>
);

export default SearchButton;
