import { ProductError } from '@/components/features/product/states/ProductError';
import { ProductList } from '@/components/features/product/ProductList';
import { getProducts } from '@/services/product/get-products';

export default async function ProductsPage() {
  try {
    const items = await getProducts();
    return (
      <main>
        <h1>Products</h1>
        <ProductList items={items} />
      </main>
    );
  } catch {
    return (
      <main>
        <h1>Products</h1>
        <ProductError />
      </main>
    );
  }
}
