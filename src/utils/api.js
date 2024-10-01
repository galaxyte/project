import axios from 'axios';

export const getCategories = async () => {
  const { data } = await axios.get('https://dummyjson.com/products/categories');
  return data;
};

export const getProducts = async ({ category, searchQuery, skip }) => {
  let url = `https://dummyjson.com/products?limit=10&skip=${skip}`;
  
  if (category) url += `&category=${category}`;
  if (searchQuery) url += `&q=${searchQuery}`;

  const { data } = await axios.get(url);
  return data.products;
};
