import React, { useState } from 'react';

const ProductItem = ({ product, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [priceError, setPriceError] = useState("");

  const handleSave = () => {
    if (isNaN(price) || parseFloat(price) <= 0) {
      setPriceError("Please enter a valid price.");
      return;
    }
    setPriceError("");
    onEdit({ ...product, name, price });
    setIsEditing(false);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;

    if (/^\d*\.?\d*$/.test(value)) {
      setPrice(value);
      setPriceError("");
    }
  };

  return (
    <div className="product-item">
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="number" 
            value={price} 
            onChange={handlePriceChange} 
          />
          <button className='buttonStyle' onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{name}</h3>
          <p>${price}</p>
          <button className='buttonStyle' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='buttonStyle' onClick={() => onDelete(product.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
