import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import type { CartItem, Product } from './types/product';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
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

  function incrementQuantity(id: number) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementQuantity(id: number) {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          )
          .filter((item) => item.quantity > 0) // Optional: auto-remove when 0
    );
  }

  function removeFromCart(id: number) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        🛒 Shopping Cart App
      </h1>
      <Cart
        cart={cart}
        onIncrement={incrementQuantity}
        onDecrement={decrementQuantity}
        onRemove={removeFromCart}
      />
      <ProductList onAddToCart={addToCart} />
    </div>
  );
}

export default App;
