import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3> {/* Render product title */}
          <p>{product.description}</p> {/* Render product description */}
          <img src={product.thumbnail} alt={product.title} /> {/* Render image */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
