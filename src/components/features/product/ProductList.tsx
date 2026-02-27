import { ProductItem } from './ProductItem';
import { ProductEmpty } from './states/ProductEmpty';

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
    return <ProductEmpty />;
  }

  return (
    <ul>
      {items.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
