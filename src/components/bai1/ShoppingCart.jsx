import React from 'react';

const ShoppingCart = ({ selectedProducts, handleProductIncrement, handleProductDecrement, totalPrice }) => {
  if (!selectedProducts || selectedProducts.length === 0) {
    return (
      <div className="empty-cart">
        <p>Giỏ hàng đang trống...</p>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <h3>Giỏ hàng</h3>
      <ul>
        {selectedProducts.map((product, index) => (
          <li className="cart-item" key={product.id}>
            <div>
              {product.name} - Giá: {product.price.toLocaleString('vi-VN')} VND - Số lượng: {product.quantity}
            </div>
            <div>
              <button onClick={() => handleProductDecrement(index)}>-</button>
              <button onClick={() => handleProductIncrement(index)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="cart-total">Tổng tiền: {totalPrice.toLocaleString('vi-VN')} VND</p>
    </div>
  );
};

export default ShoppingCart;