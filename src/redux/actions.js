import axios from 'axios';
import {
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  SET_CATEGORY,
  SET_SEARCH_QUERY,
  CLEAR_PRODUCTS
} from './types';

export const fetchCategories = () => async (dispatch) => {
  const response = await axios.get('https://dummyjson.com/products/categories');
  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};

export const fetchProducts = ({ category = '', searchQuery = '', skip = 0 }) => async (dispatch) => {
  let url = `https://dummyjson.com/products?limit=10&skip=${skip}`;
  
  // Apply category filter if a category is selected
  if (category) {
    url = `https://dummyjson.com/products/category/${category}?limit=10&skip=${skip}`;
  }

  // Apply search filter if a search query exists
  if (searchQuery) {
    url += `&q=${searchQuery}`;
  }

  const response = await axios.get(url);
  dispatch({ type: FETCH_PRODUCTS, payload: response.data.products });
};

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS
});
