import ProductStatusBoard from '../components/ProductStatusBoard';
import { mockProducts } from '../lib/mockProducts';

export default function Page() {
  return (
    <main className="page">
      <header>
        <p className="eyebrow">OT-CHAWON / DAY10</p>
        <h1>상품 운영 상태 대시보드</h1>
        <p className="subtitle">데모용 최소 UI 골격. API 연결 전 상태 확인 화면.</p>
      </header>
      <ProductStatusBoard items={mockProducts} />
    </main>
  );
}
