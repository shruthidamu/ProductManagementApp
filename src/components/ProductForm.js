import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (!productName || !productPrice) {
      alert("Please fill all fields");
      return;
    }

    if (isNaN(productPrice) || parseFloat(productPrice) <= 0) {
      setPriceError("Please enter a valid price.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
    };

    dispatch(addProduct(newProduct));

    setProductName("");
    setProductPrice("");
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    
    if (/^\d*\.?\d*$/.test(value)) {
      setProductPrice(value);
      setPriceError("");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        value={productName}
        onChange={(e) => {
          setProductName(e.target.value);
        }}
        placeholder="Product Name"
      />
      <input
        type="text"
        value={productPrice}
        onChange={handlePriceChange}
        placeholder="Product Price"
      />
      <button className="buttonStyle" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};

export default ProductForm;
