import { getProducts } from '@/services/product/get-products';

export default async function ProductsPage() {
  try {
    const items = await getProducts();

    if (items.length === 0) {
      return (
        <main>
          <h1>Products</h1>
          <p>No products available.</p>
        </main>
      );
    }

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
  } catch {
    return (
      <main>
        <h1>Products</h1>
        <p>Failed to load products.</p>
      </main>
    );
  }
}
