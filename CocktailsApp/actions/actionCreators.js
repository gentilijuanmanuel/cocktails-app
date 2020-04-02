import BASE_URL from '../api/urls';
import { TOGGLE_LOADING, SET_DRINK_ENTERED_VALUE, SET_DRINKS } from './actionTypes';

export const toggleLoading = () => ({ type: TOGGLE_LOADING });
export const setDrinkEnteredValue = (drinkEnteredValue) => ({ type: SET_DRINK_ENTERED_VALUE, drinkEnteredValue });
export const setDrinks = (drinks) => ({ type: SET_DRINKS, drinks });

export const fetchDrinks = (drinkEnteredValue) => (dispatch) => {
  dispatch(toggleLoading());

  fetch(BASE_URL + drinkEnteredValue)
    .then(
      (response) => response.json(),
      (error) => console.error('An error occurred.', error)
    )
    .then((json) => {
      dispatch(toggleLoading());
      dispatch(setDrinks(json.drinks));
    });
};
