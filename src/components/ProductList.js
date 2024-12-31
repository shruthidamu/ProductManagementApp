import React, { useEffect } from "react";
import ProductForm from "./ProductForm";
import { removeProduct, setProduct, updateProduct } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch products from the mock API
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5006/products");
      const data = await response.json();
      dispatch(setProduct(data));
    };

    fetchProducts();
  }, [dispatch]);

  const handleEdit = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
  };

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <ProductForm />
      <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
