import type { CartItem } from '../types/product';
import CartItemComponent from './CartItem';

interface CartProps {
  cart: CartItem[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
}

function Cart({ cart, onIncrement, onDecrement, onRemove }: CartProps) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your chart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItemComponent
              key={item.id}
              item={item}
              onIncrement={() => onIncrement(item.id)}
              onDecrement={() => onDecrement(item.id)}
              onRemove={() => onRemove(item.id)}
            />
          ))}
          <div className="flex justify-between items-center mt-6 p-4 bg-white rounded shadow">
            <span className="font-medium text-gray-700">
              Total items: {totalItems}
            </span>
            <span className="text-xl font-semibold text-blue-600">
              ${totalPrice}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
