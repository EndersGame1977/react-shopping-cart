import React, { useContext } from "react";

// Components
import Product from "./Product";

// Contexts
import { ProductContext } from "../contexts/ProductContext";

const Products = () => {
  const { products, addItem } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.key} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
