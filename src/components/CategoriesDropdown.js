import React from 'react';

const CategoriesDropdown = ({ categories, onCategorySelect }) => {
  return (
    <select onChange={(e) => onCategorySelect(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category.slug} value={category.slug}>
          {category.name} {/* Ensure you render 'name' or 'slug', not the entire object */}
        </option>
      ))}
    </select>
  );
};

export default CategoriesDropdown;
