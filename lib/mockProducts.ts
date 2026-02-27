export type ProductState = 'ready' | 'warning' | 'blocked';

export interface ProductCardModel {
  id: string;
  name: string;
  state: ProductState;
  reason: string;
}

export const mockProducts: ProductCardModel[] = [
  { id: 'P-101', name: 'Aero Zip Hoodie', state: 'ready', reason: '재고/사이즈 동기화 완료' },
  { id: 'P-102', name: 'Street Cargo', state: 'warning', reason: 'L 사이즈 재고 임계치' },
  { id: 'P-103', name: 'Daily Wide Tee', state: 'blocked', reason: '이미지 QC 미완료' },
];
