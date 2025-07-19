import React, { useState } from 'react';
import ProductList from './components/ProductList';
import type { CartItem, Product } from './types/product';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToChart(product: Product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Update quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add full CartItem, not just id + quantity
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        🛒 Shopping Cart App
      </h1>
      <ProductList onAddToCart={addToChart} />
    </div>
  );
}

export default App;
