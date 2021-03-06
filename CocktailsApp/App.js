import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen, CocktailsScreen } from './screens/index';

import colors from './constants/colors';

const RootStack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="CocktailsScreen"
        component={CocktailsScreen}
        options={{
          title: 'Cocktails Finder',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary
          },
        }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
