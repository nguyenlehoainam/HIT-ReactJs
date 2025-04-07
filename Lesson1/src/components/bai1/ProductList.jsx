import React from 'react';

const ProductList = ({ ListProducts, addToCart }) => {
  return (
    <div className="product-list">
      <h3>Danh sách sản phẩm</h3>
      <div>
        {ListProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <div>
              {product.name} - {product.price.toLocaleString('vi-VN')} VND
            </div>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;