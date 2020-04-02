import { TOGGLE_LOADING, SET_DRINK_ENTERED_VALUE, SET_DRINKS } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  drinkEnteredValue: ''
};

const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case SET_DRINK_ENTERED_VALUE:
      return {
        ...state,
        drinkEnteredValue: action.drinkEnteredValue
      };
    case SET_DRINKS:
      return {
        ...state,
        drinks: action.drinks
      };
    default:
      return state;
  }
};

export default drinksReducer;
