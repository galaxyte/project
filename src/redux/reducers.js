import { combineReducers } from 'redux';
import {
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  SET_CATEGORY,
  SET_SEARCH_QUERY,
  CLEAR_PRODUCTS
} from './types';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...state, ...action.payload]; // Append new products for pagination
    case CLEAR_PRODUCTS:
      return [];
    default:
      return state;
  }
};

const categoryReducer = (state = '', action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

const searchQueryReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

// Combine all reducers
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  selectedCategory: categoryReducer,
  searchQuery: searchQueryReducer
});

export default rootReducer;

// Selectors to retrieve specific slices of state
export const selectCategories = (state) => state.categories;
export const selectProducts = (state) => state.products;
export const selectSelectedCategory = (state) => state.selectedCategory;
export const selectSearchQuery = (state) => state.searchQuery;
