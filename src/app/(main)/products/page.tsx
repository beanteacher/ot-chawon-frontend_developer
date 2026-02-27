import { getProducts } from '@/services/product/get-products';

export default async function ProductsPage() {
  const items = await getProducts().catch(() => []);

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </main>
  );
}
