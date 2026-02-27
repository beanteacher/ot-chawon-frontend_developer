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
        <p>Failed to load products.</p>
      </main>
    );
  }
}
