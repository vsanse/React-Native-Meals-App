import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favMeals: [],
};
const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIdx = state.favMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      const updatedMeals = [...state.favMeals];
      if (existingIdx >= 0) {
        updatedMeals.splice(existingIdx, 1);
        return {
          ...state,
          favMeals: updatedMeals,
        };
      } else {
        const foundMeal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favMeals: [...updatedMeals, foundMeal],
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals: filteredMeals,
      };
    default:
      return state;
  }
};

export default mealReducer;
