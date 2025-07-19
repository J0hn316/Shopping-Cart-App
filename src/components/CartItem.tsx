import type { CartItem } from '../types/product';

interface CartItemsProps {
  item: CartItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

function CartItemComponent({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemsProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded mb-4">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
          <p className="text-sm text-gray-600">{item.price.toFixed(2)}</p>
          <div className="flex item-center gap-2 mt-2">
            <button
              onClick={onDecrement}
              className="px-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={onIncrement}
              className="px-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="text-sm text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItemComponent;
