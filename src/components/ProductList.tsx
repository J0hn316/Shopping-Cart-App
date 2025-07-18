import ProductCard from './ProductCard';
import { products } from '../data/products';
import type { Product } from '../types/product';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

function ProductList({ onAddToCart }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
