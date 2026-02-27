import { ProductItem } from './ProductItem';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  items: Product[];
}

export function ProductList({ items }: ProductListProps) {
  if (items.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
