import { formatPrice } from '@/lib/utils/price';

interface ProductItemProps {
  id: number;
  name: string;
  price: number;
}

export function ProductItem({ name, price }: ProductItemProps) {
  return <li>{name} - {formatPrice(price)}</li>;
}
