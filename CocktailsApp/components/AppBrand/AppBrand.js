import React from 'react';
import {
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import styles from './styles';

const AppBrand = () => (
  <View style={styles.appBrandContainer}>
    <Icon
      name="glass"
      size={70}
      color={colors.white}
    />
    <View style={styles.textContainer}>
      <Text style={styles.cocktailText}>Cocktail</Text>
      <Text style={styles.finderText}>Finder</Text>
    </View>
  </View>
);

export default AppBrand;
