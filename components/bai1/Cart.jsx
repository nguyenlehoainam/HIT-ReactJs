import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import './styles.css';

const Cart = () => {
  const Products = [
    { id: 1, name: 'iPhone 15', price: 25000000 },
    { id: 2, name: 'MacBook Air M2', price: 32000000 },
    { id: 3, name: 'iPad Pro', price: 28000000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleProductIncrement = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity += 1;
      return updatedCart;
    });
  };

  const handleProductDecrement = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1);
      }
      return updatedCart;
    });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const CartHeader = ({ cartItems }) => {
    return (
      <div className="cart-header">
        <span role="img" aria-label="cart">🛒</span>
        <h2>Giỏ hàng ({cartItems} sản phẩm)</h2>
      </div>
    );
  };

  return (
    <div>
      <CartHeader cartItems={cart.length} />
      <ProductList ListProducts={Products} addToCart={addToCart} />
      <ShoppingCart
        selectedProducts={cart}
        handleProductIncrement={handleProductIncrement}
        handleProductDecrement={handleProductDecrement}
        totalPrice={calculateTotalPrice()}
      />
    </div>
  );
};

export default Cart;