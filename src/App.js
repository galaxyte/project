import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchCategories, fetchProducts, setCategory, setSearchQuery, clearProducts } from './redux/actions';
import { selectCategories, selectProducts, selectSelectedCategory, selectSearchQuery } from './redux/reducers';
import CategoriesDropdown from './components/CategoriesDropdown';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import InfiniteScroll from './components/InfiniteScroll';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);
  const selectedCategory = useSelector(selectSelectedCategory);
  const searchQuery = useSelector(selectSearchQuery);
  
  let skip = 0;

  // Fetch categories when the component mounts
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Fetch products based on query params (category and searchQuery)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category') || '';
    const query = params.get('query') || '';
    
    // Clear previous products and fetch new ones based on the current category and query
    dispatch(clearProducts());
    dispatch(fetchProducts({ category, searchQuery: query }));
  }, [location.search, dispatch]);

  // Update the category in the Redux store and URL query params
  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    updateQueryParams({ category });
  };

  // Update search query in the Redux store and URL query params
  const handleSearchChange = (query) => {
    dispatch(setSearchQuery(query));
    updateQueryParams({ query });
  };

  // Infinite scroll loader
  const loadMoreProducts = () => {
    skip += 10;
    dispatch(fetchProducts({ category: selectedCategory, searchQuery, skip }));
  };

  // Function to update the URL query params
  const updateQueryParams = ({ category, query }) => {
    const params = new URLSearchParams(location.search);
    if (category !== undefined) params.set('category', category);
    if (query !== undefined) params.set('query', query);
    navigate({ search: params.toString() });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearchChange} />
      <CategoriesDropdown categories={categories} onCategorySelect={handleCategoryChange} />
      <InfiniteScroll loadMore={loadMoreProducts}>
        <ProductList products={products} />
      </InfiniteScroll>
    </div>
  );
};

export default App;
